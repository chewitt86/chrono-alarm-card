# Chrono Alarm Card

A clock and multi-alarm card for Home Assistant. Displays the time (digital or flip-clock style), manages up to 5 alarms with day-of-week scheduling, and provides action toggles for your alarm automations.

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://github.com/hacs/integration)

## Screenshots

<!-- TODO: Add screenshots here -->

## Features

- **Digital & Flip clock** styles
- **Up to 5 alarms** backed by HA entities (`input_datetime` + `input_boolean`)
- **Day-of-week scheduling** per alarm (via `input_text` helper)
- **Tap-to-edit** alarm dialog (adjust time and days)
- **Snooze / Dismiss** overlay when an alarm fires
- **Action toggles** — control `input_boolean` helpers that drive your alarm automations (lights, TV, coffee, etc.)
- **Weather display** (optional)
- **Lovelace visual editor** — full GUI configuration
- Follows your HA theme

## Installation

### HACS (recommended)

1. Open HACS in your Home Assistant instance.
2. Go to **Frontend** → three-dot menu → **Custom repositories**.
3. Add this repository URL and select **Lovelace** as the category.
4. Search for **Chrono Alarm Card** and install it.
5. Restart Home Assistant (or hard-refresh the browser).

### Manual

1. Download `chrono-alarm-card.js` from the [latest release](../../releases/latest).
2. Copy it to `config/www/chrono-alarm-card.js`.
3. In HA go to **Settings → Dashboards → Resources** and add:
   ```
   /local/chrono-alarm-card.js   (JavaScript Module)
   ```
4. Refresh the browser.

## Prerequisites

Create the following HA helpers for each alarm you want:

| Helper | Type | Purpose |
|--------|------|---------|
| `input_datetime.alarm_1` | Date and/or time (time only) | Alarm time |
| `input_boolean.alarm_1_enabled` | Toggle | Enable/disable alarm |
| `input_text.alarm_1_days` | Text | Day schedule, e.g. `mon,tue,wed,thu,fri` |

The `input_text` for days is optional. If omitted, the alarm fires every day when enabled.

For action toggles, create `input_boolean` helpers (e.g. `input_boolean.alarm_lights`, `input_boolean.alarm_tv`). Your automations should watch these helpers to decide which actions to perform.

## Configuration

### Example YAML

```yaml
type: custom:chrono-alarm-card
clock_style: digital
time_format: 12h
show_date: true
show_day: true
show_weather: true
weather_entity: weather.home
alarms:
  - time_entity: input_datetime.alarm_1
    enabled_entity: input_boolean.alarm_1_enabled
    days_entity: input_text.alarm_1_days
    name: Work
  - time_entity: input_datetime.alarm_2
    enabled_entity: input_boolean.alarm_2_enabled
    days_entity: input_text.alarm_2_days
    name: Weekend
snooze:
  duration: 5
  max_count: 3
action_toggles:
  - entity: input_boolean.alarm_lights
    icon: mdi:lightbulb
  - entity: input_boolean.alarm_tv
    name: TV
    icon: mdi:television
  - entity: input_boolean.alarm_coffee
    icon: mdi:coffee
```

### Flip Clock Example

```yaml
type: custom:chrono-alarm-card
clock_style: flip
time_format: 24h
show_date: true
show_day: true
show_weather: false
alarms:
  - time_entity: input_datetime.alarm_1
    enabled_entity: input_boolean.alarm_1_enabled
    name: Morning
snooze:
  duration: 10
  max_count: 2
action_toggles: []
```

### Options Reference

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `clock_style` | `digital` \| `flip` | `digital` | Clock display style |
| `time_format` | `12h` \| `24h` | `12h` | Time format |
| `show_date` | boolean | `true` | Show current date |
| `show_day` | boolean | `true` | Show day of week |
| `show_weather` | boolean | `false` | Show weather info |
| `weather_entity` | string | — | Weather entity ID |
| `alarms` | list | `[]` | Alarm configurations (max 5) |
| `snooze.duration` | number | `5` | Snooze duration in minutes |
| `snooze.max_count` | number | `3` | Maximum snooze count |
| `action_toggles` | list | `[]` | Action toggle configurations |

#### Alarm Options

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| `time_entity` | string | Yes | `input_datetime` entity |
| `enabled_entity` | string | Yes | `input_boolean` entity |
| `days_entity` | string | No | `input_text` entity for day schedule |
| `name` | string | No | Display name |

#### Action Toggle Options

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| `entity` | string | Yes | `input_boolean` entity |
| `name` | string | No | Custom label (defaults to friendly name) |
| `icon` | string | No | MDI icon (e.g. `mdi:lightbulb`) |
| `show` | boolean | No | Set `false` to hide |

## Development

```bash
# Install dependencies
npm install

# Build
npm run build

# Watch mode (rebuilds on changes)
npm run watch
```

### Local testing in Home Assistant

1. Build the card: `npm run build`
2. Copy `dist/chrono-alarm-card.js` to your HA `config/www/` directory.
3. Add as a resource: `/local/chrono-alarm-card.js` (JavaScript Module).
4. Add the card to a dashboard.
5. During development, use `npm run watch` and copy the output after each change, then hard-refresh the browser (Ctrl+Shift+R).

## License

MIT
