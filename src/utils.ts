import { DayOfWeek, HomeAssistant, AlarmConfig } from './types';
import { JS_DAY_MAP } from './constants';

/**
 * Dispatch a custom event (used by the config editor).
 */
export function fireEvent(
  node: HTMLElement,
  type: string,
  detail?: Record<string, unknown>,
): void {
  node.dispatchEvent(
    new CustomEvent(type, { bubbles: true, composed: true, detail }),
  );
}

/**
 * Format a Date into hours, minutes, and optional AM/PM period.
 */
export function formatTime(
  date: Date,
  format: '12h' | '24h',
): { hours: string; minutes: string; period?: string } {
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, '0');
  let period: string | undefined;

  if (format === '12h') {
    period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
  }

  return {
    hours: hours.toString().padStart(2, '0'),
    minutes,
    period,
  };
}

/**
 * Get today's day key.
 */
export function getCurrentDayKey(): DayOfWeek {
  return JS_DAY_MAP[new Date().getDay()];
}

/**
 * Parse days from an input_text entity (comma-separated) or return all days.
 */
export function getAlarmDays(
  alarm: AlarmConfig,
  hass: HomeAssistant,
): DayOfWeek[] {
  if (!alarm.days_entity) return [];
  const entity = hass.states[alarm.days_entity];
  if (!entity || !entity.state || entity.state === 'unknown') return [];
  return entity.state
    .split(',')
    .map((d) => d.trim().toLowerCase() as DayOfWeek)
    .filter((d) => JS_DAY_MAP.includes(d));
}

/**
 * Parse time from an input_datetime entity state ("HH:MM" or "HH:MM:SS").
 */
export function parseAlarmTime(
  entityState: string,
): { hours: number; minutes: number } | null {
  const parts = entityState.split(':').map(Number);
  if (parts.length < 2 || isNaN(parts[0]) || isNaN(parts[1])) return null;
  return { hours: parts[0], minutes: parts[1] };
}

/**
 * Format alarm time for display.
 */
export function formatAlarmTime(
  entityState: string,
  format: '12h' | '24h',
): string {
  const parsed = parseAlarmTime(entityState);
  if (!parsed) return '--:--';

  let { hours } = parsed;
  const minutes = parsed.minutes.toString().padStart(2, '0');

  if (format === '12h') {
    const period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${hours}:${minutes} ${period}`;
  }

  return `${hours.toString().padStart(2, '0')}:${minutes}`;
}

/**
 * Format a days array into a short display string.
 */
export function formatDaysShort(days: DayOfWeek[]): string {
  if (days.length === 0) return 'Every day';
  if (days.length === 7) return 'Every day';

  const weekdays: DayOfWeek[] = ['mon', 'tue', 'wed', 'thu', 'fri'];
  const weekends: DayOfWeek[] = ['sat', 'sun'];

  if (
    days.length === 5 &&
    weekdays.every((d) => days.includes(d))
  ) {
    return 'Weekdays';
  }

  if (
    days.length === 2 &&
    weekends.every((d) => days.includes(d))
  ) {
    return 'Weekends';
  }

  const labels: Record<DayOfWeek, string> = {
    mon: 'Mo',
    tue: 'Tu',
    wed: 'We',
    thu: 'Th',
    fri: 'Fr',
    sat: 'Sa',
    sun: 'Su',
  };

  return days.map((d) => labels[d]).join(', ');
}

/**
 * Calculate the time remaining until an alarm triggers.
 * Returns null if the alarm has no active days.
 */
export function getTimeUntilAlarm(
  alarmHours: number,
  alarmMinutes: number,
  days: DayOfWeek[],
): { hours: number; minutes: number } | null {
  const now = new Date();
  const todayIdx = now.getDay(); // 0=Sun
  const currentTotal = now.getHours() * 60 + now.getMinutes();
  const alarmTotal = alarmHours * 60 + alarmMinutes;
  const activeDays = days.length > 0 ? days : [...JS_DAY_MAP];

  for (let offset = 0; offset <= 7; offset++) {
    const checkIdx = (todayIdx + offset) % 7;
    const checkDay = JS_DAY_MAP[checkIdx];

    if (!activeDays.includes(checkDay)) continue;
    if (offset === 0 && alarmTotal <= currentTotal) continue;

    const totalMinutes =
      offset === 0
        ? alarmTotal - currentTotal
        : offset * 24 * 60 - currentTotal + alarmTotal;

    return {
      hours: Math.floor(totalMinutes / 60),
      minutes: totalMinutes % 60,
    };
  }

  return null;
}

/**
 * Format a countdown into a human-readable string.
 */
export function formatCountdown(hours: number, minutes: number): string {
  if (hours >= 24) {
    const days = Math.floor(hours / 24);
    const remHours = hours % 24;
    return `in ${days}d ${remHours}h`;
  }
  if (hours > 0) {
    return `in ${hours}h ${minutes}m`;
  }
  return `in ${minutes}m`;
}
