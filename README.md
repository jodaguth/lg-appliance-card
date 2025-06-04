# LG Appliance Card

A minimalist, modern Home Assistant card for LG ThinQ washers and dryers.

![Washer + Dryer Card Demo](https://your-screenshot-url-here.com) <!-- Optional GIF or PNG -->

---

## ✨ Features

- 🧺 Displays both **Washer** and **Dryer** in a single card
- 📊 **Progress ring** based on remaining vs initial time
- 🔧 Fully configurable via **Lovelace UI editor**
- ✅ Choose which fields to display (e.g. run state, spin speed, water temp)
- 💡 Light/dark theme compatible
- 🔄 Real-time updates via the [LG ThinQ Devices HACS integration](https://github.com/ollo69/ha-smartthinq-sensors)

---

## 🚀 Installation

### Via HACS (recommended)

1. In Home Assistant, go to **HACS > Frontend > ⋮ > Custom repositories**
2. Add repository:  https://github.com/YOUR_USERNAME/lg-appliance-card

Category: `Lovelace`
3. Install the **LG Appliance Card**
4. Refresh your browser (Ctrl+F5)

---

## 🧰 Setup

Once installed:

1. Go to any dashboard
2. Click **Edit dashboard** → **+ Add Card**
3. Search for `LG Appliance Card`
4. Use the editor to:
- Select washer and dryer entities
- Choose which fields to show
- Save and enjoy

---

## 🧪 Example YAML

```yaml
type: custom:lg-appliance-card
washer:
  enabled: true
  entities:
    remaining_time: sensor.washer_remaining_time
    initial_time: sensor.washer_initial_time
    run_state: sensor.washer_run_state
    spin_speed: sensor.washer_spin_speed
    water_temp: sensor.washer_water_temp
  display:
    - run_state
    - spin_speed
    - water_temp




type: custom:lg-appliance-card
dryer:
  enabled: true
  entities:
    remaining_time: sensor.dryer_remaining_time
    initial_time: sensor.dryer_initial_time
    run_state: sensor.dryer_run_state
    course: sensor.dryer_course
  display:
    - run_state
    - course