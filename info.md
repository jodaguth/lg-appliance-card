# LG Appliance Card

A minimal, modern custom card for LG ThinQ washers and dryers using the `LG ThinQ Devices` HACS integration.

## Features

- Separate display for Washer & Dryer
- Progress ring (initial vs remaining time)
- Configurable UI fields: spin speed, water temp, course, etc.
- Lovelace Config Editor for easy setup
- Fully theme-compatible (light/dark mode)
- HACS compatible for easy install & updates

## Setup

1. Install [LG ThinQ Devices](https://github.com/ollo69/ha-smartthinq-sensors)
2. Install this card via HACS
3. Add to Lovelace:
   - Use the UI editor
   - Select your washer & dryer entities
   - Choose which fields to display

## Example YAML

```yaml
type: custom:lg-appliance-card
washer:
  enabled: true
  entities:
    remaining_time: sensor.lg_washer_remaining_time
    initial_time: sensor.lg_washer_initial_time
    run_state: sensor.lg_washer_run_state
    spin_speed: sensor.lg_washer_spin_speed
    water_temp: sensor.lg_washer_water_temp
  display:
    - run_state
    - spin_speed
    - water_temp
dryer:
  enabled: true
  entities:
    remaining_time: sensor.lg_dryer_remaining_time
    run_state: sensor.lg_dryer_run_state
  display:
    - run_state
    - remaining_time
