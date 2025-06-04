import { html, css, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { HomeAssistant } from "custom-card-helpers";
import type { LGApplianceConfig } from "./types";

@customElement("dryer-card")
export class DryerCard extends LitElement {
  @property({ attribute: false }) hass!: HomeAssistant;
  @property({ type: Object }) config!: LGApplianceConfig;

  static styles = css`
    .appliance {
      padding: 1rem;
      border-radius: 1rem;
      background: var(--card-background-color);
      box-shadow: var(--ha-card-box-shadow);
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }
    .title {
      font-size: 1.2rem;
      font-weight: bold;
    }
    .status {
      display: grid;
      grid-template-columns: auto auto;
      gap: 0.4rem 1rem;
      font-size: 0.9rem;
    }
    .ring {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      background: conic-gradient(var(--accent-color) var(--angle), #ddd 0deg);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.8rem;
      font-weight: bold;
    }
  `;

  render() {
    const e = this.config.entities;
    const d = this.config.display;
    const s = this.hass.states;

    let percent = 0;
    if (e.initial_time && e.remaining_time && s[e.initial_time] && s[e.remaining_time]) {
      const init = s[e.initial_time].state.split(":").map(Number);
      const rem = s[e.remaining_time].state.split(":").map(Number);
      const total = init[0] * 60 + init[1];
      const left = rem[0] * 60 + rem[1];
      if (total > 0) percent = Math.min(100, ((total - left) / total) * 100);
    }

    return html`
      <div class="appliance">
        <div class="title">Dryer</div>
        <div class="ring" style="--angle: ${percent * 3.6}deg">
          ${percent.toFixed(0)}%
        </div>
        <div class="status">
          ${d.includes("run_state") && e.run_state
            ? html`<div>State:</div><div>${s[e.run_state]?.state ?? "-"}</div>`
            : ""}
          ${d.includes("spin_speed") && e.spin_speed
            ? html`<div>Spin:</div><div>${s[e.spin_speed]?.state ?? "-"}</div>`
            : ""}
          ${d.includes("water_temp") && e.water_temp
            ? html`<div>Temp:</div><div>${s[e.water_temp]?.state ?? "-"}</div>`
            : ""}
          ${d.includes("course") && e.course
            ? html`<div>Course:</div><div>${s[e.course]?.state ?? "-"}</div>`
            : ""}
          ${d.includes("run_completed") && e.run_completed
            ? html`<div>Completed:</div><div>${s[e.run_completed]?.state ?? "-"}</div>`
            : ""}
        </div>
      </div>
    `;
  }
}
