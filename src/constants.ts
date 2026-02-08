import { ChronoAlarmCardConfig, DayOfWeek } from './types';

export const CARD_TAG = 'chrono-alarm-card';
export const EDITOR_TAG = 'chrono-alarm-card-editor';

export const DAYS_OF_WEEK: DayOfWeek[] = [
  'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun',
];

export const DAY_LABELS: Record<DayOfWeek, string> = {
  mon: 'M',
  tue: 'T',
  wed: 'W',
  thu: 'T',
  fri: 'F',
  sat: 'S',
  sun: 'S',
};

export const DAY_LABELS_FULL: Record<DayOfWeek, string> = {
  mon: 'Mon',
  tue: 'Tue',
  wed: 'Wed',
  thu: 'Thu',
  fri: 'Fri',
  sat: 'Sat',
  sun: 'Sun',
};

/** Maps JS Date.getDay() (0=Sun) to our DayOfWeek keys */
export const JS_DAY_MAP: DayOfWeek[] = [
  'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat',
];

export const MAX_ALARMS = 5;
export const CLOCK_TICK_MS = 1000;

export const DEFAULT_CONFIG: Omit<ChronoAlarmCardConfig, 'type'> = {
  clock_style: 'digital',
  mode: 'panel',
  time_format: '12h',
  show_date: true,
  show_day: true,
  show_weather: false,
  alarms: [],
  snooze: {
    duration: 5,
    max_count: 3,
  },
  action_toggles: [],
};
