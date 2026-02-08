import { LitElement, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { snoozeDialogStyles } from './styles';
import { AlarmConfig, TimeFormat } from './types';
import { formatTime, fireEvent } from './utils';

@customElement('chrono-snooze-dialog')
export class ChronoSnoozeDialog extends LitElement {
  static styles = snoozeDialogStyles;

  @property({ attribute: false }) alarm!: AlarmConfig;
  @property({ type: Number }) snoozeCount = 0;
  @property({ type: Number }) maxSnoozes = 3;
  @property() timeFormat: TimeFormat = '12h';

  @state() private _time = new Date();
  private _interval?: number;

  connectedCallback(): void {
    super.connectedCallback();
    this._interval = window.setInterval(() => {
      this._time = new Date();
    }, 1000);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this._interval) clearInterval(this._interval);
  }

  private _snooze(): void {
    fireEvent(this, 'alarm-snooze');
  }

  private _dismiss(): void {
    fireEvent(this, 'alarm-dismiss');
  }

  protected render() {
    const { hours, minutes, period } = formatTime(this._time, this.timeFormat);
    const timeStr = period
      ? `${hours}:${minutes} ${period}`
      : `${hours}:${minutes}`;
    const alarmName = this.alarm?.name || 'Alarm';
    const snoozesLeft = this.maxSnoozes - this.snoozeCount;
    const canSnooze = snoozesLeft > 0;

    return html`
      <div class="snooze-overlay">
        <div class="snooze-ring-icon">&#128276;</div>
        <div class="snooze-alarm-name">${alarmName}</div>
        <div class="snooze-time">${timeStr}</div>
        <div class="snooze-buttons">
          <button
            class="snooze-btn"
            ?disabled=${!canSnooze}
            @click=${this._snooze}
          >
            Snooze
          </button>
          <button class="dismiss-btn" @click=${this._dismiss}>Dismiss</button>
        </div>
        ${canSnooze
          ? html`<div class="snooze-remaining">
              ${snoozesLeft} snooze${snoozesLeft > 1 ? 's' : ''} remaining
            </div>`
          : html`<div class="snooze-remaining">No snoozes remaining</div>`}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chrono-snooze-dialog': ChronoSnoozeDialog;
  }
}
