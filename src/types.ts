export interface HomeAssistant {
  states: Record<string, HassEntity>;
  callService(
    domain: string,
    service: string,
    data?: Record<string, unknown>,
    target?: { entity_id: string | string[] },
  ): Promise<void>;
  themes: {
    darkMode: boolean;
  };
  locale: {
    language: string;
    number_format: string;
    time_format: string;
  };
  user: {
    name: string;
  };
}

export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: Record<string, unknown>;
  last_changed: string;
  last_updated: string;
}

export interface AlarmConfig {
  time_entity: string;
  enabled_entity: string;
  days_entity?: string;
  name?: string;
}

export interface ActionToggleConfig {
  entity: string;
  name?: string;
  icon?: string;
  show?: boolean;
}

export interface SnoozeConfig {
  duration: number;
  max_count: number;
}

export interface AdvancedConfig {
  enabled: boolean;
  greeting?: string;
  date_format?: string;
  custom_css?: string;
}

export type ClockStyle = 'digital' | 'flip';
export type DisplayMode = 'panel' | 'compact';
export type TimeFormat = '12h' | '24h';
export type DayOfWeek = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';

export interface ChronoAlarmCardConfig {
  type: string;
  clock_style: ClockStyle;
  mode: DisplayMode;
  time_format: TimeFormat;
  show_date: boolean;
  show_day: boolean;
  show_weather: boolean;
  weather_entity?: string;
  alarms: AlarmConfig[];
  snooze: SnoozeConfig;
  action_toggles: ActionToggleConfig[];
  advanced?: AdvancedConfig;
}
