# LG Appliance Card

A modern, minimalist Home Assistant card for displaying your LG ThinQ washer and dryer. Includes animated progress rings, real-time status, and beautiful Venus OS–inspired visuals. Fully configurable and HACS-compatible.

![Screenshot](https://raw.githubusercontent.com/your-github-username/lg-appliance-card/main/assets/screenshot.png)

---

## ✨ Features

- Dual washer + dryer layout in one card
- Animated progress ring based on remaining vs initial time
- Auto-blur and “Off” overlay when appliance is powered down
- Entity configuration UI via visual editor
- Responsive, clean, and Venus OS–inspired style

---

## 📦 Installation (via HACS)

1. In Home Assistant, go to **HACS > Frontend > Custom Repositories**
2. Add this repo: `https://github.com/your-github-username/lg-appliance-card`
3. Select **Lovelace** and click **Add**
4. Go to **Frontend**, find **LG Appliance Card**, and click Install
5. Add the card to a dashboard

---

## 🛠️ Manual YAML Configuration

```yaml
type: custom:lg-appliance-card
washer:
  enabled: true
  entities:
    power: switch.washer_power
    remaining_time: sensor.washer_remaining_time
    initial_time: sensor.washer_initial_time
    run_state: sensor.washer_run_state
    run_completed: sensor.washer_run_completed
    course: sensor.washer_current_course
    spin_speed: sensor.washer_spin
    water_temp: sensor.washer_water_temp
dryer:
  enabled: true
  entities:
    power: switch.dryer_power
    remaining_time: sensor.dryer_remaining_time
    initial_time: sensor.dryer_initial_time
    run_state: sensor.dryer_run_state
    run_completed: sensor.dryer_run_completed
    course: sensor.dryer_current_course
```

---

## 🧩 Required Integrations

- [LG ThinQ Devices (HACS)](https://github.com/ollo69/ha-smartthinq-sensors)

---

## 🔧 Developer Notes

- Built with `lit`, `rollup`, and `@rollup/plugin-typescript`
- See `rollup.config.mjs` and `hacs.json` for build + distribution config

---

## 🔖 Versioning

This repo uses [GitHub Releases](https://github.com/your-github-username/lg-appliance-card/releases) to publish updates. Each tag must contain:

- Built `dist/lg-appliance-card.js`
- Valid `hacs.json`
- Updated changelog in release notes

---

## 💬 Feedback / Issues

Open an issue or pull request on GitHub.

---

## 🧑‍💻 Author

Created by [your-github-username](https://github.com/your-github-username) — contributions welcome!

---

MIT License
