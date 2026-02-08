import { LitElement, html, nothing, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { digitalClockStyles } from './styles';
import { TimeFormat } from './types';
import { formatTime } from './utils';

@customElement('chrono-digital-clock')
export class ChronoDigitalClock extends LitElement {
  static styles = digitalClockStyles;

  @property() format: TimeFormat = '12h';
  @state() private _time = new Date();
  @state() private _colonVisible = true;

  private _interval?: number;

  connectedCallback(): void {
    super.connectedCallback();
    this._startTick();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this._stopTick();
  }

  private _startTick(): void {
    this._tick();
    this._interval = window.setInterval(() => this._tick(), 1000);
  }

  private _stopTick(): void {
    if (this._interval) {
      clearInterval(this._interval);
      this._interval = undefined;
    }
  }

  private _tick(): void {
    this._time = new Date();
    this._colonVisible = !this._colonVisible;
  }

  protected render() {
    const { hours, minutes, period } = formatTime(this._time, this.format);

    return html`
      <div class="digital-clock">
        <span class="time-digits">
          ${hours}<span class="colon ${this._colonVisible ? '' : 'colon-hidden'}">:</span>${minutes}
        </span>
        ${period ? html`<span class="period">${period}</span>` : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chrono-digital-clock': ChronoDigitalClock;
  }
}
