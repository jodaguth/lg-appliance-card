import { html, css, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import type { HomeAssistant } from "custom-card-helpers";
import type { LGApplianceConfig } from "./types";

@customElement("lg-appliance-editor")
export class LGApplianceEditor extends LitElement {
  @property({ attribute: false }) hass!: HomeAssistant;
  @state() private _config!: LGApplianceConfig;

  static styles = css`
    .form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .row {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    ha-select, ha-textfield {
      flex: 1;
    }
  `;

  setConfig(config: LGApplianceConfig): void {
    this._config = config;
  }

  private _valueChanged(ev: Event): void {
    const target = ev.target as HTMLInputElement;
    const value = target.value;
    const field = target.getAttribute("data-field") as keyof LGApplianceConfig["entities"];
    if (!field || !this._config) return;

    const newConfig: LGApplianceConfig = {
      ...this._config,
      entities: {
        ...this._config.entities,
        [field]: value,
      },
    };

    this._config = newConfig;
    this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: newConfig } }));
  }

  private renderEntityRow(label: string, field: keyof LGApplianceConfig["entities"]): unknown {
    const entities = Object.keys(this.hass.states).filter((eid) => eid.startsWith("sensor") || eid.startsWith("switch"));
    return html`
      <div class="row">
        <label>${label}</label>
        <ha-select
          .value=${this._config.entities?.[field] ?? ""}
          data-field=${field}
          @selected=${this._valueChanged}
          @change=${this._valueChanged}
        >
          ${entities.map(
            (eid) => html`<mwc-list-item value=${eid}>${eid}</mwc-list-item>`
          )}
        </ha-select>
      </div>
    `;
  }

  render() {
    if (!this.hass || !this._config) return html``;
    return html`
      <div class="form">
        ${this.renderEntityRow("Power Switch", "power")}
        ${this.renderEntityRow("Initial Time", "initial_time")}
        ${this.renderEntityRow("Remaining Time", "remaining_time")}
        ${this.renderEntityRow("Run State", "run_state")}
        ${this.renderEntityRow("Course", "course")}
        ${this.renderEntityRow("Run Completed", "run_completed")}
        ${this.renderEntityRow("Spin Speed", "spin_speed")}
        ${this.renderEntityRow("Water Temp", "water_temp")}
      </div>
    `;
  }
}
