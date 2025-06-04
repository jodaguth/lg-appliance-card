import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { HomeAssistant } from "custom-card-helpers";
import type { LGApplianceConfig } from "./types";

@customElement("washer-card")
export class WasherCard extends LitElement {
  @property({ attribute: false }) hass!: HomeAssistant;
  @property({ type: Object }) config!: LGApplianceConfig;

  static styles = css`
    :host {
      display: block;
    }

    .card {
      position: relative;
      padding: 1.5rem;
      border-radius: 1rem;
      background: var(--card-background-color);
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      overflow: hidden;
      transition: filter 0.4s ease, opacity 0.4s ease;
    }

    .card.off {
      filter: blur(2px);
      opacity: 0.5;
    }

    .overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.4);
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
      font-weight: bold;
      z-index: 5;
      pointer-events: none;
    }

    .header {
      display: flex;
      justify-content: space-between;
      font-size: 1.25rem;
      font-weight: bold;
      border-bottom: 1px solid var(--divider-color);
      padding-bottom: 0.5rem;
    }

    .ring-wrap {
      display: flex;
      justify-content: center;
    }

    .ring {
      position: relative;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background: conic-gradient(var(--ring-color) var(--angle), #444 0deg);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      font-size: 1rem;
      transition: background 0.8s ease;
    }

    .ring::after {
      content: "";
      position: absolute;
      width: 70px;
      height: 70px;
      background: var(--card-background-color);
      border-radius: 50%;
      z-index: 1;
    }

    .ring span {
      position: relative;
      z-index: 2;
    }

    .tile-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
      gap: 0.8rem;
    }

    .tile {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid var(--divider-color);
      padding: 0.75rem;
      border-radius: 0.75rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      font-size: 0.85rem;
      align-items: center;
    }

    .tile ha-icon {
      margin-bottom: 0.25rem;
      color: var(--primary-color);
    }

    .tile .value {
      font-weight: bold;
      font-size: 1rem;
      color: var(--primary-text-color);
    }

    .tile .label {
      color: var(--secondary-text-color);
      font-size: 0.75rem;
      margin-top: 0.3rem;
    }
  `;

  render() {
    const e = this.config.entities;
    const d = this.config.display;
    const s = this.hass.states;

    const state = s[e.run_state!]?.state || "unknown";
    const isOn = s["switch.washer_power"]?.state === "on";

    const init = s[e.initial_time!]?.state || "0:00";
    const rem = s[e.remaining_time!]?.state || "0:00";

    const [ih, im] = init.split(":").map(Number);
    const [rh, rm] = rem.split(":").map(Number);
    const total = ih * 60 + im;
    const left = rh * 60 + rm;
    const percent = total > 0 ? Math.min(100, ((total - left) / total) * 100) : 0;

    const ringColor = state === "done"
      ? "#00cc66"
      : state === "running"
      ? "#1e90ff"
      : "#888888";

    this.style.setProperty("--ring-color", ringColor);
    this.style.setProperty("--angle", `${(percent * 3.6).toFixed(1)}deg`);

    const icon = (name: string) => html`<ha-icon icon="${name}"></ha-icon>`;

    return html`
      <div class="card ${!isOn ? "off" : ""}">
        ${!isOn ? html`<div class="overlay">Off</div>` : ""}

        <div class="header">Washer</div>

        <div class="ring-wrap">
          <div class="ring">
            <span>${state === "done" ? "Done" : `${percent.toFixed(0)}%`}</span>
          </div>
        </div>

        <div class="tile-grid">
          ${d.includes("run_state") && e.run_state
            ? html`<div class="tile">${icon("mdi:play-circle")}<div class="value">${state}</div><div class="label">Status</div></div>`
            : ""}
          ${d.includes("spin_speed") && e.spin_speed
            ? html`<div class="tile">${icon("mdi:rotate-right")}<div class="value">${s[e.spin_speed]?.state ?? "-"}</div><div class="label">Spin</div></div>`
            : ""}
          ${d.includes("water_temp") && e.water_temp
            ? html`<div class="tile">${icon("mdi:thermometer")}<div class="value">${s[e.water_temp]?.state ?? "-"}</div><div class="label">Temp</div></div>`
            : ""}
          ${d.includes("course") && e.course
            ? html`<div class="tile">${icon("mdi:playlist-check")}<div class="value">${s[e.course]?.state ?? "-"}</div><div class="label">Course</div></div>`
            : ""}
          ${d.includes("run_completed") && e.run_completed
            ? html`<div class="tile">${icon("mdi:check-circle")}<div class="value">${s[e.run_completed]?.state ?? "-"}</div><div class="label">Complete</div></div>`
            : ""}
        </div>
      </div>
    `;
  }
}
