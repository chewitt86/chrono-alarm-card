import { LitElement, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { editorStyles } from './styles';
import {
  HomeAssistant,
  ChronoAlarmCardConfig,
  AlarmConfig,
  ActionToggleConfig,
  ChipConfig,
} from './types';
import { DEFAULT_CONFIG, MAX_ALARMS } from './constants';
import { fireEvent } from './utils';

@customElement('chrono-alarm-card-editor')
export class ChronoAlarmCardEditor extends LitElement {
  static styles = editorStyles;

  @property({ attribute: false }) hass!: HomeAssistant;
  @state() private _config!: ChronoAlarmCardConfig;

  setConfig(config: ChronoAlarmCardConfig): void {
    this._config = { ...DEFAULT_CONFIG, ...config } as ChronoAlarmCardConfig;
  }

  private _dispatch(): void {
    fireEvent(this, 'config-changed', { config: { ...this._config } });
  }

  /* ---------------------------------------------------------------- */
  /*  Value change helpers                                             */
  /* ---------------------------------------------------------------- */

  private _valueChanged(key: keyof ChronoAlarmCardConfig, value: unknown): void {
    (this._config as any)[key] = value;
    this._config = { ...this._config };
    this._dispatch();
  }

  private _snoozeChanged(key: 'duration' | 'max_count', value: number): void {
    this._config = {
      ...this._config,
      snooze: { ...this._config.snooze, [key]: value },
    };
    this._dispatch();
  }

  private _alarmChanged(index: number, key: keyof AlarmConfig, value: string): void {
    const alarms = [...(this._config.alarms ?? [])];
    alarms[index] = { ...alarms[index], [key]: value };
    this._config = { ...this._config, alarms };
    this._dispatch();
  }

  private _addAlarm(): void {
    const alarms = [...(this._config.alarms ?? [])];
    if (alarms.length >= MAX_ALARMS) return;
    alarms.push({ time_entity: '', enabled_entity: '' });
    this._config = { ...this._config, alarms };
    this._dispatch();
  }

  private _removeAlarm(index: number): void {
    const alarms = [...(this._config.alarms ?? [])];
    alarms.splice(index, 1);
    this._config = { ...this._config, alarms };
    this._dispatch();
  }

  private _toggleChanged(index: number, key: keyof ActionToggleConfig, value: unknown): void {
    const toggles = [...(this._config.action_toggles ?? [])];
    toggles[index] = { ...toggles[index], [key]: value };
    this._config = { ...this._config, action_toggles: toggles };
    this._dispatch();
  }

  private _addToggle(): void {
    const toggles = [...(this._config.action_toggles ?? [])];
    toggles.push({ entity: '', show: true });
    this._config = { ...this._config, action_toggles: toggles };
    this._dispatch();
  }

  private _removeToggle(index: number): void {
    const toggles = [...(this._config.action_toggles ?? [])];
    toggles.splice(index, 1);
    this._config = { ...this._config, action_toggles: toggles };
    this._dispatch();
  }

  private _chipChanged(index: number, key: keyof ChipConfig, value: unknown): void {
    const chips = [...(this._config.chips ?? [])];
    chips[index] = { ...chips[index], [key]: value };
    this._config = { ...this._config, chips };
    this._dispatch();
  }

  private _addChip(): void {
    const chips = [...(this._config.chips ?? [])];
    chips.push({ entity: '', show_icon: true, show_name: false, show_state: true });
    this._config = { ...this._config, chips };
    this._dispatch();
  }

  private _removeChip(index: number): void {
    const chips = [...(this._config.chips ?? [])];
    chips.splice(index, 1);
    this._config = { ...this._config, chips };
    this._dispatch();
  }

  /* ---------------------------------------------------------------- */
  /*  Render                                                           */
  /* ---------------------------------------------------------------- */

  protected render() {
    if (!this.hass || !this._config) return nothing;

    return html`
      <div class="editor">
        ${this._renderGeneral()}
        ${this._renderChips()}
        ${this._renderAlarms()}
        ${this._renderSnooze()}
        ${this._renderToggles()}
      </div>
    `;
  }

  private _renderChips() {
    const chips = this._config.chips ?? [];

    return html`
      <div class="editor-section">
        <div class="section-title">Chips</div>

        ${chips.map(
          (chip, i) => html`
            <div class="alarm-block">
              <div class="alarm-block-header">
                <span>Chip ${i + 1}</span>
                <button class="remove-btn" @click=${() => this._removeChip(i)}>
                  Remove
                </button>
              </div>

              <div class="editor-field">
                <ha-entity-picker
                  .hass=${this.hass}
                  .value=${chip.entity ?? ''}
                  label="Entity"
                  allow-custom-entity
                  @value-changed=${(e: CustomEvent) =>
                    this._chipChanged(i, 'entity', e.detail.value)}
                ></ha-entity-picker>
              </div>

              <div class="editor-field">
                <ha-icon-picker
                  .hass=${this.hass}
                  .value=${chip.icon ?? ''}
                  label="Icon (optional, defaults to entity icon)"
                  @value-changed=${(e: CustomEvent) =>
                    this._chipChanged(i, 'icon', e.detail.value)}
                ></ha-icon-picker>
              </div>

              <div class="editor-field">
                <ha-textfield
                  label="Custom name (optional)"
                  .value=${chip.name ?? ''}
                  @input=${(e: InputEvent) =>
                    this._chipChanged(i, 'name', (e.target as any).value)}
                ></ha-textfield>
              </div>

              <div class="editor-row">
                <label>Show icon</label>
                <ha-switch
                  .checked=${chip.show_icon !== false}
                  @change=${(e: Event) =>
                    this._chipChanged(i, 'show_icon', (e.target as any).checked)}
                ></ha-switch>
              </div>

              <div class="editor-row">
                <label>Show name</label>
                <ha-switch
                  .checked=${chip.show_name !== false}
                  @change=${(e: Event) =>
                    this._chipChanged(i, 'show_name', (e.target as any).checked)}
                ></ha-switch>
              </div>

              <div class="editor-row">
                <label>Show state</label>
                <ha-switch
                  .checked=${chip.show_state !== false}
                  @change=${(e: Event) =>
                    this._chipChanged(i, 'show_state', (e.target as any).checked)}
                ></ha-switch>
              </div>
            </div>
          `,
        )}

        <button class="add-btn" @click=${this._addChip}>+ Add Chip</button>
      </div>
    `;
  }

  private _renderGeneral() {
    const cfg = this._config;

    return html`
      <div class="editor-section">
        <div class="section-title">General</div>

        <div class="editor-field">
          <ha-select
            label="Clock Style"
            .value=${cfg.clock_style ?? 'digital'}
            @selected=${(e: CustomEvent) =>
              this._valueChanged('clock_style', (e.target as any).value)}
            @closed=${(e: Event) => e.stopPropagation()}
            fixedMenuPosition
            naturalMenuWidth
          >
            <mwc-list-item value="digital">Digital</mwc-list-item>
            <mwc-list-item value="flip">Flip Clock</mwc-list-item>
          </ha-select>
        </div>

        <div class="editor-field">
          <ha-select
            label="Time Format"
            .value=${cfg.time_format ?? '12h'}
            @selected=${(e: CustomEvent) =>
              this._valueChanged('time_format', (e.target as any).value)}
            @closed=${(e: Event) => e.stopPropagation()}
            fixedMenuPosition
            naturalMenuWidth
          >
            <mwc-list-item value="12h">12 Hour</mwc-list-item>
            <mwc-list-item value="24h">24 Hour</mwc-list-item>
          </ha-select>
        </div>

        <div class="editor-row">
          <label>Show date</label>
          <ha-switch
            .checked=${cfg.show_date !== false}
            @change=${(e: Event) =>
              this._valueChanged('show_date', (e.target as any).checked)}
          ></ha-switch>
        </div>

        <div class="editor-row">
          <label>Show day of week</label>
          <ha-switch
            .checked=${cfg.show_day !== false}
            @change=${(e: Event) =>
              this._valueChanged('show_day', (e.target as any).checked)}
          ></ha-switch>
        </div>

        <div class="editor-row">
          <label>Show weather</label>
          <ha-switch
            .checked=${cfg.show_weather === true}
            @change=${(e: Event) =>
              this._valueChanged('show_weather', (e.target as any).checked)}
          ></ha-switch>
        </div>

        ${cfg.show_weather
          ? html`
              <div class="editor-field">
                <ha-entity-picker
                  .hass=${this.hass}
                  .value=${cfg.weather_entity ?? ''}
                  .includeDomains=${['weather']}
                  label="Weather entity"
                  allow-custom-entity
                  @value-changed=${(e: CustomEvent) =>
                    this._valueChanged('weather_entity', e.detail.value)}
                ></ha-entity-picker>
              </div>
            `
          : nothing}
      </div>
    `;
  }

  private _renderAlarms() {
    const alarms = this._config.alarms ?? [];
    const canAdd = alarms.length < MAX_ALARMS;

    return html`
      <div class="editor-section">
        <div class="section-title">Alarms (${alarms.length}/${MAX_ALARMS})</div>

        ${alarms.map(
          (alarm, i) => html`
            <div class="alarm-block">
              <div class="alarm-block-header">
                <span>Alarm ${i + 1}</span>
                <button class="remove-btn" @click=${() => this._removeAlarm(i)}>
                  Remove
                </button>
              </div>

              <div class="editor-field">
                <ha-entity-picker
                  .hass=${this.hass}
                  .value=${alarm.time_entity ?? ''}
                  .includeDomains=${['input_datetime']}
                  label="Time entity"
                  allow-custom-entity
                  @value-changed=${(e: CustomEvent) =>
                    this._alarmChanged(i, 'time_entity', e.detail.value)}
                ></ha-entity-picker>
              </div>

              <div class="editor-field">
                <ha-entity-picker
                  .hass=${this.hass}
                  .value=${alarm.enabled_entity ?? ''}
                  .includeDomains=${['input_boolean']}
                  label="Enabled entity"
                  allow-custom-entity
                  @value-changed=${(e: CustomEvent) =>
                    this._alarmChanged(i, 'enabled_entity', e.detail.value)}
                ></ha-entity-picker>
              </div>

              <div class="editor-field">
                <ha-entity-picker
                  .hass=${this.hass}
                  .value=${alarm.days_entity ?? ''}
                  .includeDomains=${['input_text']}
                  label="Days entity (optional)"
                  allow-custom-entity
                  @value-changed=${(e: CustomEvent) =>
                    this._alarmChanged(i, 'days_entity', e.detail.value)}
                ></ha-entity-picker>
              </div>

              <div class="editor-field">
                <ha-textfield
                  label="Display name (optional)"
                  .value=${alarm.name ?? ''}
                  @input=${(e: InputEvent) =>
                    this._alarmChanged(i, 'name', (e.target as any).value)}
                ></ha-textfield>
              </div>
            </div>
          `,
        )}

        ${canAdd
          ? html`<button class="add-btn" @click=${this._addAlarm}>
              + Add Alarm
            </button>`
          : nothing}
      </div>
    `;
  }

  private _renderSnooze() {
    const snooze = this._config.snooze ?? DEFAULT_CONFIG.snooze!;

    return html`
      <div class="editor-section">
        <div class="section-title">Snooze</div>

        <div class="editor-field">
          <ha-textfield
            label="Snooze duration (minutes)"
            type="number"
            min="1"
            max="60"
            .value=${String(snooze.duration)}
            @input=${(e: InputEvent) =>
              this._snoozeChanged('duration', Number((e.target as any).value) || 5)}
          ></ha-textfield>
        </div>

        <div class="editor-field">
          <ha-textfield
            label="Max snoozes"
            type="number"
            min="0"
            max="20"
            .value=${String(snooze.max_count)}
            @input=${(e: InputEvent) =>
              this._snoozeChanged('max_count', Number((e.target as any).value) || 3)}
          ></ha-textfield>
        </div>
      </div>
    `;
  }

  private _renderToggles() {
    const toggles = this._config.action_toggles ?? [];

    return html`
      <div class="editor-section">
        <div class="section-title">Action Toggles</div>

        ${toggles.map(
          (toggle, i) => html`
            <div class="alarm-block">
              <div class="alarm-block-header">
                <span>Toggle ${i + 1}</span>
                <button class="remove-btn" @click=${() => this._removeToggle(i)}>
                  Remove
                </button>
              </div>

              <div class="editor-field">
                <ha-entity-picker
                  .hass=${this.hass}
                  .value=${toggle.entity ?? ''}
                  .includeDomains=${['input_boolean']}
                  label="Entity"
                  allow-custom-entity
                  @value-changed=${(e: CustomEvent) =>
                    this._toggleChanged(i, 'entity', e.detail.value)}
                ></ha-entity-picker>
              </div>

              <div class="editor-field">
                <ha-textfield
                  label="Custom name (optional)"
                  .value=${toggle.name ?? ''}
                  @input=${(e: InputEvent) =>
                    this._toggleChanged(i, 'name', (e.target as any).value)}
                ></ha-textfield>
              </div>

              <div class="editor-field">
                <ha-icon-picker
                  .hass=${this.hass}
                  .value=${toggle.icon ?? ''}
                  label="Icon (optional)"
                  @value-changed=${(e: CustomEvent) =>
                    this._toggleChanged(i, 'icon', e.detail.value)}
                ></ha-icon-picker>
              </div>

              <div class="editor-row">
                <label>Show name</label>
                <ha-switch
                  .checked=${toggle.show_name !== false}
                  @change=${(e: Event) =>
                    this._toggleChanged(i, 'show_name', (e.target as any).checked)}
                ></ha-switch>
              </div>

              <div class="editor-row">
                <label>Show icon</label>
                <ha-switch
                  .checked=${toggle.show_icon !== false}
                  @change=${(e: Event) =>
                    this._toggleChanged(i, 'show_icon', (e.target as any).checked)}
                ></ha-switch>
              </div>

              <div class="editor-row">
                <label>Visible</label>
                <ha-switch
                  .checked=${toggle.show !== false}
                  @change=${(e: Event) =>
                    this._toggleChanged(i, 'show', (e.target as any).checked)}
                ></ha-switch>
              </div>
            </div>
          `,
        )}

        <button class="add-btn" @click=${this._addToggle}>+ Add Toggle</button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chrono-alarm-card-editor': ChronoAlarmCardEditor;
  }
}
