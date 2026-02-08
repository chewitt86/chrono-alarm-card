import { css } from 'lit';

/* ------------------------------------------------------------------ */
/*  Main card layout                                                   */
/* ------------------------------------------------------------------ */
export const cardStyles = css`
  :host {
    display: block;
  }

  ha-card {
    height: 100%;
    overflow: hidden;
  }

  .chrono-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
    min-height: 300px;
    background: var(--ha-card-background, var(--card-background-color));
    color: var(--primary-text-color);
    position: relative;
  }

  .chrono-card.panel {
    min-height: 100vh;
    padding: 32px;
  }

  /* -- Clock section ------------------------------------------------ */
  .clock-section {
    margin-bottom: 12px;
  }

  /* -- Info section (date, day, weather) ----------------------------- */
  .info-section {
    display: flex;
    gap: 16px;
    align-items: center;
    font-size: 1.1rem;
    opacity: 0.75;
    margin-bottom: 24px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .info-section .separator {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: currentColor;
    opacity: 0.5;
  }

  .weather-info {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .weather-info ha-icon {
    --mdc-icon-size: 20px;
  }

  /* -- Alarms section ----------------------------------------------- */
  .alarms-section {
    width: 100%;
    max-width: 480px;
    margin-bottom: 20px;
  }

  .alarms-header {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: 0.5;
    margin-bottom: 8px;
    padding-left: 4px;
  }

  .alarm-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 14px;
    cursor: pointer;
    border-radius: 12px;
    transition: background-color 0.2s ease;
    margin-bottom: 4px;
  }

  .alarm-item:hover {
    background: var(--secondary-background-color, rgba(0, 0, 0, 0.05));
  }

  .alarm-item .alarm-name {
    font-weight: 500;
    min-width: 80px;
  }

  .alarm-item .alarm-time {
    font-size: 1.1rem;
    font-variant-numeric: tabular-nums;
    flex: 1;
  }

  .alarm-item .alarm-days {
    font-size: 0.8rem;
    opacity: 0.6;
  }

  .alarm-item .alarm-toggle {
    margin-left: auto;
  }

  .alarm-item.disabled {
    opacity: 0.4;
  }

  /* -- Action toggles ----------------------------------------------- */
  .toggles-section {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    max-width: 480px;
  }

  .toggle-item {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px 14px;
    background: var(--secondary-background-color, rgba(0, 0, 0, 0.05));
    border-radius: 24px;
    font-size: 0.9rem;
  }

  .toggle-item ha-icon {
    --mdc-icon-size: 18px;
    opacity: 0.7;
  }

  /* -- Overlay (dialogs) -------------------------------------------- */
  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    backdrop-filter: blur(4px);
  }

  .dialog-card {
    background: var(--ha-card-background, var(--card-background-color, #fff));
    color: var(--primary-text-color);
    border-radius: 16px;
    padding: 24px;
    min-width: 300px;
    max-width: 90%;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }

  .dialog-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 20px;
    text-align: center;
  }

  .dialog-actions {
    display: flex;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 20px;
  }

  .dialog-actions button {
    padding: 8px 20px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    font-size: 0.9rem;
    font-weight: 500;
  }

  .btn-cancel {
    background: transparent;
    color: var(--primary-text-color);
    opacity: 0.7;
  }

  .btn-cancel:hover {
    opacity: 1;
  }

  .btn-save {
    background: var(--primary-color, #03a9f4);
    color: var(--text-primary-color, #fff);
  }

  .btn-save:hover {
    opacity: 0.9;
  }

  /* -- Error / empty states ----------------------------------------- */
  .error-state {
    padding: 16px;
    color: var(--error-color, #db4437);
    text-align: center;
  }
`;

/* ------------------------------------------------------------------ */
/*  Digital clock                                                      */
/* ------------------------------------------------------------------ */
export const digitalClockStyles = css`
  :host {
    display: block;
  }

  .digital-clock {
    display: flex;
    align-items: baseline;
    justify-content: center;
    font-family: var(--chrono-font-family, 'Segoe UI', system-ui, sans-serif);
    font-weight: 300;
    line-height: 1;
    user-select: none;
  }

  .time-digits {
    font-size: var(--chrono-clock-size, 96px);
    font-variant-numeric: tabular-nums;
    letter-spacing: -2px;
  }

  .period {
    font-size: calc(var(--chrono-clock-size, 96px) * 0.28);
    font-weight: 400;
    margin-left: 6px;
    opacity: 0.7;
  }

  .colon-blink {
    animation: blink 1s step-end infinite;
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
`;

/* ------------------------------------------------------------------ */
/*  Flip clock                                                         */
/* ------------------------------------------------------------------ */
export const flipClockStyles = css`
  :host {
    display: block;
  }

  .flip-clock {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    user-select: none;
  }

  .flip-group {
    display: flex;
    gap: 4px;
  }

  /* -- Individual digit ---------------------------------------------- */
  .flip-unit {
    position: relative;
    width: var(--chrono-flip-width, 64px);
    height: var(--chrono-flip-height, 100px);
    perspective: 300px;
    border-radius: 8px;
    overflow: visible;
  }

  .flip-face {
    position: absolute;
    left: 0;
    width: 100%;
    height: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--chrono-flip-font-size, 60px);
    font-family: var(--chrono-flip-font, 'Roboto Mono', 'Courier New', monospace);
    font-weight: 700;
    color: var(--chrono-flip-color, #e0e0e0);
  }

  .upper {
    top: 0;
    background: var(--chrono-flip-bg, #1a1a2e);
    border-radius: 8px 8px 0 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    z-index: 1;
  }

  .upper .digit-text {
    transform: translateY(50%);
  }

  .lower {
    bottom: 0;
    background: var(--chrono-flip-bg-lower, #16162a);
    border-radius: 0 0 8px 8px;
    z-index: 1;
  }

  .lower .digit-text {
    transform: translateY(-50%);
  }

  /* -- Fold animation panels ---------------------------------------- */
  .fold {
    position: absolute;
    left: 0;
    width: 100%;
    height: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--chrono-flip-font-size, 60px);
    font-family: var(--chrono-flip-font, 'Roboto Mono', 'Courier New', monospace);
    font-weight: 700;
    color: var(--chrono-flip-color, #e0e0e0);
    backface-visibility: hidden;
  }

  .fold-upper {
    top: 0;
    background: var(--chrono-flip-bg, #1a1a2e);
    border-radius: 8px 8px 0 0;
    transform-origin: bottom center;
    z-index: 3;
    animation: foldDown 0.3s ease-in forwards;
  }

  .fold-upper .digit-text {
    transform: translateY(50%);
  }

  .fold-lower {
    top: 50%;
    background: var(--chrono-flip-bg-lower, #16162a);
    border-radius: 0 0 8px 8px;
    transform-origin: top center;
    transform: rotateX(90deg);
    z-index: 2;
    animation: foldUp 0.3s ease-out 0.3s forwards;
  }

  .fold-lower .digit-text {
    transform: translateY(-50%);
  }

  @keyframes foldDown {
    0% {
      transform: rotateX(0deg);
    }
    100% {
      transform: rotateX(-90deg);
    }
  }

  @keyframes foldUp {
    0% {
      transform: rotateX(90deg);
    }
    100% {
      transform: rotateX(0deg);
    }
  }

  /* -- Divider line ------------------------------------------------- */
  .flip-unit::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 2px;
    background: rgba(0, 0, 0, 0.35);
    z-index: 5;
    transform: translateY(-50%);
    pointer-events: none;
  }

  /* -- Colon separator ---------------------------------------------- */
  .flip-separator {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 14px;
    margin: 0 6px;
  }

  .flip-separator .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--chrono-flip-color, #e0e0e0);
    opacity: 0.6;
  }

  /* -- Period (AM/PM) ----------------------------------------------- */
  .flip-period {
    font-size: calc(var(--chrono-flip-font-size, 60px) * 0.3);
    font-family: var(--chrono-flip-font, 'Roboto Mono', 'Courier New', monospace);
    color: var(--chrono-flip-color, #e0e0e0);
    margin-left: 8px;
    opacity: 0.6;
    align-self: flex-end;
    padding-bottom: 8px;
  }

  /* -- Shadow / depth ----------------------------------------------- */
  .flip-unit {
    box-shadow:
      0 2px 6px rgba(0, 0, 0, 0.25),
      0 1px 2px rgba(0, 0, 0, 0.15);
  }
`;

/* ------------------------------------------------------------------ */
/*  Alarm edit dialog                                                  */
/* ------------------------------------------------------------------ */
export const alarmDialogStyles = css`
  .time-picker {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin: 20px 0;
  }

  .time-col {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  .time-col button {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: none;
    background: var(--secondary-background-color, rgba(0, 0, 0, 0.06));
    color: var(--primary-text-color);
    font-size: 1.2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
  }

  .time-col button:hover {
    background: var(--primary-color, #03a9f4);
    color: var(--text-primary-color, #fff);
  }

  .time-col .time-value {
    font-size: 2.4rem;
    font-weight: 600;
    font-variant-numeric: tabular-nums;
    width: 64px;
    text-align: center;
  }

  .time-colon {
    font-size: 2.4rem;
    font-weight: 600;
    padding: 0 4px;
    padding-top: 4px;
  }

  .days-picker {
    display: flex;
    justify-content: center;
    gap: 6px;
    margin: 16px 0;
  }

  .day-btn {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: 2px solid var(--divider-color, rgba(0, 0, 0, 0.12));
    background: transparent;
    color: var(--primary-text-color);
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }

  .day-btn.active {
    background: var(--primary-color, #03a9f4);
    border-color: var(--primary-color, #03a9f4);
    color: var(--text-primary-color, #fff);
  }

  .day-btn:hover:not(.active) {
    border-color: var(--primary-color, #03a9f4);
  }

  .no-days-entity {
    text-align: center;
    font-size: 0.85rem;
    opacity: 0.5;
    margin: 8px 0;
    font-style: italic;
  }
`;

/* ------------------------------------------------------------------ */
/*  Snooze / dismiss dialog                                            */
/* ------------------------------------------------------------------ */
export const snoozeDialogStyles = css`
  .snooze-overlay {
    position: absolute;
    inset: 0;
    background: var(--ha-card-background, var(--card-background-color, #111));
    color: var(--primary-text-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 20;
    animation: fadeIn 0.3s ease;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .snooze-alarm-name {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 8px;
    opacity: 0.8;
  }

  .snooze-time {
    font-size: 4rem;
    font-weight: 200;
    margin-bottom: 32px;
    font-variant-numeric: tabular-nums;
  }

  .snooze-buttons {
    display: flex;
    gap: 24px;
  }

  .snooze-btn,
  .dismiss-btn {
    padding: 14px 32px;
    border-radius: 28px;
    border: none;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.15s, opacity 0.2s;
  }

  .snooze-btn:active,
  .dismiss-btn:active {
    transform: scale(0.96);
  }

  .snooze-btn {
    background: var(--primary-color, #03a9f4);
    color: var(--text-primary-color, #fff);
  }

  .snooze-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .dismiss-btn {
    background: var(--secondary-background-color, rgba(255, 255, 255, 0.1));
    color: var(--primary-text-color);
  }

  .snooze-remaining {
    font-size: 0.8rem;
    opacity: 0.5;
    margin-top: 12px;
  }

  .snooze-ring-icon {
    font-size: 3rem;
    margin-bottom: 16px;
    animation: ring 0.5s ease infinite alternate;
  }

  @keyframes ring {
    from {
      transform: rotate(-15deg);
    }
    to {
      transform: rotate(15deg);
    }
  }
`;

/* ------------------------------------------------------------------ */
/*  Config editor                                                      */
/* ------------------------------------------------------------------ */
export const editorStyles = css`
  :host {
    display: block;
  }

  .editor {
    padding: 16px;
  }

  .editor-section {
    margin-bottom: 16px;
    border-bottom: 1px solid var(--divider-color, rgba(0, 0, 0, 0.12));
    padding-bottom: 16px;
  }

  .editor-section:last-child {
    border-bottom: none;
  }

  .section-title {
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 12px;
    opacity: 0.7;
  }

  .editor-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
  }

  .editor-row label {
    font-size: 0.95rem;
  }

  .editor-row ha-entity-picker,
  .editor-row ha-select,
  .editor-row ha-textfield {
    width: 100%;
  }

  .editor-field {
    margin-bottom: 12px;
  }

  .alarm-block {
    background: var(--secondary-background-color, rgba(0, 0, 0, 0.04));
    border-radius: 8px;
    padding: 12px;
    margin-bottom: 8px;
  }

  .alarm-block-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    font-weight: 500;
  }

  .remove-btn {
    background: none;
    border: none;
    color: var(--error-color, #db4437);
    cursor: pointer;
    font-size: 0.85rem;
    padding: 4px 8px;
    border-radius: 4px;
  }

  .remove-btn:hover {
    background: rgba(219, 68, 55, 0.1);
  }

  .add-btn {
    width: 100%;
    padding: 8px;
    border: 2px dashed var(--divider-color, rgba(0, 0, 0, 0.12));
    border-radius: 8px;
    background: transparent;
    color: var(--primary-text-color);
    cursor: pointer;
    font-size: 0.9rem;
    opacity: 0.6;
    transition: opacity 0.2s;
  }

  .add-btn:hover {
    opacity: 1;
  }
`;
