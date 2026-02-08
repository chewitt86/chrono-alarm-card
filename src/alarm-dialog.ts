import { LitElement, html, nothing, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { cardStyles, alarmDialogStyles } from './styles';
import {
  HomeAssistant,
  AlarmConfig,
  DayOfWeek,
} from './types';
import {
  DAYS_OF_WEEK,
  DAY_LABELS,
  DAY_LABELS_FULL,
} from './constants';
import { parseAlarmTime, getAlarmDays, fireEvent } from './utils';

@customElement('chrono-alarm-dialog')
export class ChronoAlarmDialog extends LitElement {
  static styles = [cardStyles, alarmDialogStyles];

  @property({ attribute: false }) hass!: HomeAssistant;
  @property({ attribute: false }) alarm!: AlarmConfig;
  @property({ type: Number }) alarmIndex = 0;

  @state() private _hours = 0;
  @state() private _minutes = 0;
  @state() private _days: Set<DayOfWeek> = new Set();
  @state() private _initialised = false;

  protected willUpdate(): void {
    if (!this._initialised && this.hass && this.alarm) {
      this._loadFromEntity();
      this._initialised = true;
    }
  }

  private _loadFromEntity(): void {
    const timeEntity = this.hass.states[this.alarm.time_entity];
    if (timeEntity) {
      const parsed = parseAlarmTime(timeEntity.state);
      if (parsed) {
        this._hours = parsed.hours;
        this._minutes = parsed.minutes;
      }
    }

    const days = getAlarmDays(this.alarm, this.hass);
    this._days = new Set(days);
  }

  private _adjustHours(delta: number): void {
    this._hours = (this._hours + delta + 24) % 24;
  }

  private _adjustMinutes(delta: number): void {
    this._minutes = (this._minutes + delta + 60) % 60;
  }

  private _toggleDay(day: DayOfWeek): void {
    const next = new Set(this._days);
    if (next.has(day)) {
      next.delete(day);
    } else {
      next.add(day);
    }
    this._days = next;
  }

  private async _save(): Promise<void> {
    // Update the input_datetime entity
    const timeStr = `${this._hours.toString().padStart(2, '0')}:${this._minutes.toString().padStart(2, '0')}:00`;
    try {
      await this.hass.callService('input_datetime', 'set_datetime', {
        entity_id: this.alarm.time_entity,
        time: timeStr,
      });

      // Update days entity if available
      if (this.alarm.days_entity) {
        const daysStr = DAYS_OF_WEEK.filter((d) => this._days.has(d)).join(',');
        await this.hass.callService('input_text', 'set_value', {
          entity_id: this.alarm.days_entity,
          value: daysStr,
        });
      }
    } catch (e) {
      console.error('Chrono Alarm Card: failed to save alarm', e);
    }

    this._close();
  }

  private _close(): void {
    this._initialised = false;
    fireEvent(this, 'alarm-dialog-close');
  }

  protected render() {
    const displayHours = this._hours.toString().padStart(2, '0');
    const displayMinutes = this._minutes.toString().padStart(2, '0');
    const alarmName = this.alarm?.name || `Alarm ${this.alarmIndex + 1}`;

    return html`
      <div class="overlay" @click=${this._close}>
        <div class="dialog-card" @click=${(e: Event) => e.stopPropagation()}>
          <div class="dialog-title">${alarmName}</div>

          <!-- Time picker -->
          <div class="time-picker">
            <div class="time-col">
              <button @click=${() => this._adjustHours(1)}>&#9650;</button>
              <span class="time-value">${displayHours}</span>
              <button @click=${() => this._adjustHours(-1)}>&#9660;</button>
            </div>
            <span class="time-colon">:</span>
            <div class="time-col">
              <button @click=${() => this._adjustMinutes(1)}>&#9650;</button>
              <span class="time-value">${displayMinutes}</span>
              <button @click=${() => this._adjustMinutes(-1)}>&#9660;</button>
            </div>
          </div>

          <!-- Day picker -->
          ${this.alarm?.days_entity
            ? html`
                <div class="days-picker">
                  ${DAYS_OF_WEEK.map(
                    (day) => html`
                      <button
                        class="day-btn ${this._days.has(day) ? 'active' : ''}"
                        title="${DAY_LABELS_FULL[day]}"
                        @click=${() => this._toggleDay(day)}
                      >
                        ${DAY_LABELS[day]}
                      </button>
                    `,
                  )}
                </div>
              `
            : html`<p class="no-days-entity">
                Add a days_entity to enable day-of-week editing
              </p>`}

          <!-- Actions -->
          <div class="dialog-actions">
            <button class="btn-cancel" @click=${this._close}>Cancel</button>
            <button class="btn-save" @click=${this._save}>Save</button>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chrono-alarm-dialog': ChronoAlarmDialog;
  }
}
