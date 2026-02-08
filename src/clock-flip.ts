import { LitElement, html, nothing, PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { flipClockStyles } from './styles';
import { TimeFormat } from './types';
import { formatTime } from './utils';

@customElement('chrono-flip-clock')
export class ChronoFlipClock extends LitElement {
  static styles = flipClockStyles;

  @property() format: TimeFormat = '12h';
  @state() private _time = new Date();
  @state() private _digits = '0000';
  @state() private _prevDigits = '0000';
  @state() private _flipping = new Set<number>();
  @state() private _period = '';

  private _interval?: number;
  private _animTimeout?: number;

  connectedCallback(): void {
    super.connectedCallback();
    // Initialise with current time immediately (no animation)
    const { hours, minutes, period } = formatTime(new Date(), this.format);
    this._digits = `${hours}${minutes}`;
    this._prevDigits = this._digits;
    this._period = period ?? '';
    this._startTick();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this._stopTick();
  }

  private _startTick(): void {
    this._interval = window.setInterval(() => this._tick(), 1000);
  }

  private _stopTick(): void {
    if (this._interval) clearInterval(this._interval);
    if (this._animTimeout) clearTimeout(this._animTimeout);
  }

  private _tick(): void {
    this._time = new Date();
    const { hours, minutes, period } = formatTime(this._time, this.format);
    const newDigits = `${hours}${minutes}`;
    this._period = period ?? '';

    if (newDigits === this._digits) return;

    // Determine which positions changed
    const changed = new Set<number>();
    for (let i = 0; i < newDigits.length; i++) {
      if (newDigits[i] !== this._digits[i]) changed.add(i);
    }

    this._prevDigits = this._digits;
    this._digits = newDigits;
    this._flipping = changed;

    // Clear animation state after it completes
    if (this._animTimeout) clearTimeout(this._animTimeout);
    this._animTimeout = window.setTimeout(() => {
      this._flipping = new Set();
    }, 650);
  }

  protected render() {
    const d = this._digits;
    const p = this._prevDigits;

    return html`
      <div class="flip-clock">
        <div class="flip-group">
          ${this._renderUnit(d[0], p[0], 0)}
          ${this._renderUnit(d[1], p[1], 1)}
        </div>
        <div class="flip-separator">
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        <div class="flip-group">
          ${this._renderUnit(d[2], p[2], 2)}
          ${this._renderUnit(d[3], p[3], 3)}
        </div>
        ${this._period
          ? html`<span class="flip-period">${this._period}</span>`
          : nothing}
      </div>
    `;
  }

  private _renderUnit(current: string, prev: string, index: number) {
    const isFlipping = this._flipping.has(index);

    return html`
      <div class="flip-unit">
        <!-- Static upper half: always shows NEW digit -->
        <div class="flip-face upper">
          <span class="digit-text">${current}</span>
        </div>
        <!-- Static lower half: shows OLD digit while flipping, then NEW -->
        <div class="flip-face lower">
          <span class="digit-text">${isFlipping ? prev : current}</span>
        </div>

        ${isFlipping
          ? html`
              <!-- Fold-down: old digit top half folds away -->
              <div class="fold fold-upper">
                <span class="digit-text">${prev}</span>
              </div>
              <!-- Fold-up: new digit bottom half folds into place -->
              <div class="fold fold-lower">
                <span class="digit-text">${current}</span>
              </div>
            `
          : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'chrono-flip-clock': ChronoFlipClock;
  }
}
