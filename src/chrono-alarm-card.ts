import { LitElement, html, nothing, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { cardStyles } from './styles';
import {
  HomeAssistant,
  HassEntity,
  ChronoAlarmCardConfig,
  AlarmConfig,
} from './types';
import {
  DEFAULT_CONFIG,
  CLOCK_TICK_MS,
  JS_DAY_MAP,
  EDITOR_TAG,
} from './constants';
import {
  formatAlarmTime,
  formatDaysShort,
  getAlarmDays,
  parseAlarmTime,
  getCurrentDayKey,
  fireEvent,
} from './utils';

// Side-effect imports — register sub-components
import './clock-digital';
import './clock-flip';
import './alarm-dialog';
import './snooze-dialog';
import './editor';

const WEATHER_ICONS: Record<string, string> = {
  'clear-night': 'mdi:weather-night',
  cloudy: 'mdi:weather-cloudy',
  fog: 'mdi:weather-fog',
  hail: 'mdi:weather-hail',
  lightning: 'mdi:weather-lightning',
  'lightning-rainy': 'mdi:weather-lightning-rainy',
  partlycloudy: 'mdi:weather-partly-cloudy',
  pouring: 'mdi:weather-pouring',
  rainy: 'mdi:weather-rainy',
  snowy: 'mdi:weather-snowy',
  'snowy-rainy': 'mdi:weather-snowy-rainy',
  sunny: 'mdi:weather-sunny',
  windy: 'mdi:weather-windy',
  'windy-variant': 'mdi:weather-windy-variant',
  exceptional: 'mdi:alert-circle-outline',
};

@customElement('chrono-alarm-card')
export class ChronoAlarmCard extends LitElement {
  static styles = cardStyles;

  @property({ attribute: false }) hass!: HomeAssistant;
  @state() private _config!: ChronoAlarmCardConfig;

  // Alarm firing state
  @state() private _showAlarmDialog = false;
  @state() private _editingAlarmIndex = -1;
  @state() private _showSnoozeDialog = false;
  @state() private _activeAlarmIndex = -1;
  @state() private _snoozeCount = 0;

  /** Set of alarm indices that have already fired in the current minute */
  private _firedAlarms = new Set<number>();
  private _lastCheckedMinute = -1;
  private _alarmCheckInterval?: number;
  private _snoozeTimeout?: number;

  /* ---------------------------------------------------------------- */
  /*  HA lifecycle                                                     */
  /* ---------------------------------------------------------------- */

  static getConfigElement() {
    return document.createElement(EDITOR_TAG);
  }

  static getStubConfig() {
    return { ...DEFAULT_CONFIG };
  }

  setConfig(config: Partial<ChronoAlarmCardConfig>): void {
    if (!config) throw new Error('No configuration provided');
    this._config = {
      ...DEFAULT_CONFIG,
      ...config,
      snooze: { ...DEFAULT_CONFIG.snooze, ...(config.snooze ?? {}) },
    } as ChronoAlarmCardConfig;
  }

  getCardSize(): number {
    return this._config?.mode === 'panel' ? 12 : 4;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this._alarmCheckInterval = window.setInterval(
      () => this._checkAlarms(),
      CLOCK_TICK_MS,
    );
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this._alarmCheckInterval) clearInterval(this._alarmCheckInterval);
    if (this._snoozeTimeout) clearTimeout(this._snoozeTimeout);
  }

  /* ---------------------------------------------------------------- */
  /*  Alarm checking logic                                             */
  /* ---------------------------------------------------------------- */

  private _checkAlarms(): void {
    if (!this.hass || !this._config?.alarms?.length) return;
    if (this._showSnoozeDialog) return; // Already showing an alarm

    const now = new Date();
    const currentMinute = now.getHours() * 60 + now.getMinutes();

    // Reset fired set when the minute changes
    if (currentMinute !== this._lastCheckedMinute) {
      this._firedAlarms.clear();
      this._lastCheckedMinute = currentMinute;
    }

    const currentDay = getCurrentDayKey();

    for (let i = 0; i < this._config.alarms.length; i++) {
      if (this._firedAlarms.has(i)) continue;

      const alarm = this._config.alarms[i];
      const enabledEntity = this.hass.states[alarm.enabled_entity];
      if (!enabledEntity || enabledEntity.state !== 'on') continue;

      const timeEntity = this.hass.states[alarm.time_entity];
      if (!timeEntity) continue;

      const parsed = parseAlarmTime(timeEntity.state);
      if (!parsed) continue;

      const alarmMinute = parsed.hours * 60 + parsed.minutes;
      if (alarmMinute !== currentMinute) continue;

      // Check day-of-week
      const days = getAlarmDays(alarm, this.hass);
      if (days.length > 0 && !days.includes(currentDay)) continue;

      // Fire this alarm!
      this._firedAlarms.add(i);
      this._activeAlarmIndex = i;
      this._snoozeCount = 0;
      this._showSnoozeDialog = true;
      break; // Only fire one alarm at a time
    }
  }

  /* ---------------------------------------------------------------- */
  /*  Event handlers                                                   */
  /* ---------------------------------------------------------------- */

  private _openAlarmDialog(index: number): void {
    this._editingAlarmIndex = index;
    this._showAlarmDialog = true;
  }

  private _closeAlarmDialog(): void {
    this._showAlarmDialog = false;
    this._editingAlarmIndex = -1;
  }

  private _handleSnooze(): void {
    this._showSnoozeDialog = false;
    this._snoozeCount++;
    const duration = (this._config.snooze?.duration ?? 5) * 60 * 1000;
    this._snoozeTimeout = window.setTimeout(() => {
      this._showSnoozeDialog = true;
    }, duration);
  }

  private _handleDismiss(): void {
    this._showSnoozeDialog = false;
    this._activeAlarmIndex = -1;
    if (this._snoozeTimeout) clearTimeout(this._snoozeTimeout);
  }

  private _toggleAlarmEnabled(alarm: AlarmConfig, e: Event): void {
    e.stopPropagation();
    const entity = this.hass.states[alarm.enabled_entity];
    if (!entity) return;
    const service = entity.state === 'on' ? 'turn_off' : 'turn_on';
    this.hass.callService('input_boolean', service, {
      entity_id: alarm.enabled_entity,
    });
  }

  private _toggleAction(entityId: string): void {
    const entity = this.hass.states[entityId];
    if (!entity) return;
    const service = entity.state === 'on' ? 'turn_off' : 'turn_on';
    this.hass.callService('input_boolean', service, {
      entity_id: entityId,
    });
  }

  /* ---------------------------------------------------------------- */
  /*  Render                                                           */
  /* ---------------------------------------------------------------- */

  protected render() {
    if (!this._config || !this.hass) {
      return html`<ha-card>
        <div class="error-state">Card not configured</div>
      </ha-card>`;
    }

    const cfg = this._config;
    const mode = cfg.mode ?? 'panel';

    return html`
      <ha-card>
        <div class="chrono-card ${mode}">
          ${this._renderClock()}
          ${this._renderInfo()}
          ${this._renderAlarms()}
          ${this._renderToggles()}
          ${this._renderAlarmDialog()}
          ${this._renderSnoozeDialog()}
        </div>
      </ha-card>
    `;
  }

  private _renderClock() {
    const style = this._config.clock_style ?? 'digital';
    const format = this._config.time_format ?? '12h';

    if (style === 'flip') {
      return html`
        <div class="clock-section">
          <chrono-flip-clock .format=${format}></chrono-flip-clock>
        </div>
      `;
    }

    return html`
      <div class="clock-section">
        <chrono-digital-clock .format=${format}></chrono-digital-clock>
      </div>
    `;
  }

  private _renderInfo() {
    const cfg = this._config;
    const now = new Date();
    const parts: unknown[] = [];

    if (cfg.show_day) {
      const dayName = now.toLocaleDateString(undefined, { weekday: 'long' });
      parts.push(html`<span class="day-name">${dayName}</span>`);
    }

    if (cfg.show_date) {
      if (parts.length) parts.push(html`<span class="separator"></span>`);
      const dateStr = now.toLocaleDateString(undefined, {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      });
      parts.push(html`<span class="date-text">${dateStr}</span>`);
    }

    if (cfg.show_weather && cfg.weather_entity) {
      const weather = this.hass.states[cfg.weather_entity];
      if (weather) {
        if (parts.length) parts.push(html`<span class="separator"></span>`);
        const temp = weather.attributes['temperature'] ?? '';
        const unit = weather.attributes['temperature_unit'] ?? '';
        const condition = weather.state ?? '';
        const icon = WEATHER_ICONS[condition] ?? 'mdi:weather-cloudy';
        parts.push(html`
          <span class="weather-info">
            <ha-icon icon=${icon}></ha-icon>
            ${temp}${unit}
          </span>
        `);
      }
    }

    if (!parts.length) return nothing;

    return html`<div class="info-section">${parts}</div>`;
  }

  private _renderAlarms() {
    const alarms = this._config.alarms;
    if (!alarms?.length) return nothing;
    const format = this._config.time_format ?? '12h';

    return html`
      <div class="alarms-section">
        <div class="alarms-header">Alarms</div>
        ${alarms.map((alarm, i) => {
          const timeEntity = this.hass.states[alarm.time_entity];
          const enabledEntity = this.hass.states[alarm.enabled_entity];
          const isEnabled = enabledEntity?.state === 'on';
          const timeStr = timeEntity
            ? formatAlarmTime(timeEntity.state, format)
            : '--:--';
          const days = getAlarmDays(alarm, this.hass);
          const daysStr = formatDaysShort(days);
          const name = alarm.name || `Alarm ${i + 1}`;

          return html`
            <div
              class="alarm-item ${isEnabled ? '' : 'disabled'}"
              @click=${() => this._openAlarmDialog(i)}
            >
              <span class="alarm-name">${name}</span>
              <span class="alarm-time">${timeStr}</span>
              <span class="alarm-days">${daysStr}</span>
              <span class="alarm-toggle" @click=${(e: Event) => this._toggleAlarmEnabled(alarm, e)}>
                <ha-switch .checked=${isEnabled}></ha-switch>
              </span>
            </div>
          `;
        })}
      </div>
    `;
  }

  private _renderToggles() {
    const toggles = this._config.action_toggles;
    if (!toggles?.length) return nothing;

    return html`
      <div class="toggles-section">
        ${toggles
          .filter((t) => t.show !== false)
          .map((toggle) => {
            const entity = this.hass.states[toggle.entity];
            if (!entity) return nothing;
            const isOn = entity.state === 'on';
            const label =
              toggle.name ??
              (entity.attributes['friendly_name'] as string) ??
              toggle.entity;

            return html`
              <div class="toggle-item">
                ${toggle.icon
                  ? html`<ha-icon icon=${toggle.icon}></ha-icon>`
                  : nothing}
                <span>${label}</span>
                <ha-switch
                  .checked=${isOn}
                  @change=${() => this._toggleAction(toggle.entity)}
                ></ha-switch>
              </div>
            `;
          })}
      </div>
    `;
  }

  private _renderAlarmDialog() {
    if (
      !this._showAlarmDialog ||
      this._editingAlarmIndex < 0 ||
      !this._config.alarms[this._editingAlarmIndex]
    )
      return nothing;

    return html`
      <chrono-alarm-dialog
        .hass=${this.hass}
        .alarm=${this._config.alarms[this._editingAlarmIndex]}
        .alarmIndex=${this._editingAlarmIndex}
        @alarm-dialog-close=${this._closeAlarmDialog}
      ></chrono-alarm-dialog>
    `;
  }

  private _renderSnoozeDialog() {
    if (
      !this._showSnoozeDialog ||
      this._activeAlarmIndex < 0 ||
      !this._config.alarms[this._activeAlarmIndex]
    )
      return nothing;

    return html`
      <chrono-snooze-dialog
        .alarm=${this._config.alarms[this._activeAlarmIndex]}
        .snoozeCount=${this._snoozeCount}
        .maxSnoozes=${this._config.snooze?.max_count ?? 3}
        .timeFormat=${this._config.time_format ?? '12h'}
        @alarm-snooze=${this._handleSnooze}
        @alarm-dismiss=${this._handleDismiss}
      ></chrono-snooze-dialog>
    `;
  }
}

/* ------------------------------------------------------------------ */
/*  Register with HA custom-card picker                                */
/* ------------------------------------------------------------------ */
(window as any).customCards = (window as any).customCards || [];
(window as any).customCards.push({
  type: 'chrono-alarm-card',
  name: 'Chrono Alarm Card',
  description: 'A clock and multi-alarm card for Home Assistant',
  preview: true,
});

declare global {
  interface HTMLElementTagNameMap {
    'chrono-alarm-card': ChronoAlarmCard;
  }
}
