import { html, css, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import type { HomeAssistant } from "custom-card-helpers";
import type { LGApplianceCardConfig, LGApplianceConfig } from "./types";

@customElement("lg-appliance-editor")
export class LGApplianceEditor extends LitElement {
  @property({ attribute: false }) hass!: HomeAssistant;
  @state() private _config!: LGApplianceCardConfig;

  static styles = css`
    .section {
      border: 1px solid var(--divider-color, #ccc);
      padding: 1rem;
      border-radius: 8px;
      margin-bottom: 1rem;
    }
    .section h2 {
      margin-top: 0;
      font-size: 1.1rem;
    }
    .field {
      display: flex;
      flex-direction: column;
      margin-bottom: 0.8rem;
    }
    label {
      font-weight: bold;
    }
  `;

  setConfig(config: LGApplianceCardConfig) {
    this._config = config;
  }

  private _handleEntityChange(ev: Event, section: "washer" | "dryer", key: string) {
    const value = (ev.target as HTMLInputElement).value;
    const newConfig = { ...this._config };
    newConfig[section] = {
      ...newConfig[section],
      enabled: true,
      entities: {
        ...newConfig[section]?.entities,
        [key]: value,
      },
      display: [...(newConfig[section]?.display || [])],
    };
    this._config = newConfig;
    this._emitChange();
  }

  private _handleDisplayToggle(ev: Event, section: "washer" | "dryer", key: string) {
    const checked = (ev.target as HTMLInputElement).checked;
    const newConfig = { ...this._config };
    const display = new Set(newConfig[section]?.display || []);
    if (checked) display.add(key);
    else display.delete(key);

    newConfig[section] = {
      ...newConfig[section],
      enabled: true,
      entities: {
        ...newConfig[section]?.entities,
      },
      display: Array.from(display),
    };

    this._config = newConfig;
    this._emitChange();
  }

  private _emitChange() {
    this.dispatchEvent(new CustomEvent("config-changed", { detail: { config: this._config } }));
  }

  private _renderSection(label: string, section: "washer" | "dryer"): unknown {
    const e = this._config?.[section]?.entities || {};
    const d = this._config?.[section]?.display || [];
    const allEntities = Object.keys(this.hass.states);

    const fieldList: { label: string; key: keyof typeof e }[] = [
      { label: "Power", key: "power" },
      { label: "Remaining Time", key: "remaining_time" },
      { label: "Initial Time", key: "initial_time" },
      { label: "Run State", key: "run_state" },
      { label: "Run Completed", key: "run_completed" },
      { label: "Course", key: "course" },
      { label: "Spin Speed", key: "spin_speed" },
      { label: "Water Temp", key: "water_temp" },
    ];

    return html`
      <div class="section">
        <h2>${label}</h2>
        ${fieldList.map(
          (f) => html`
            <div class="field">
              <label>${f.label}</label>
              <select @change=${(e: Event) => this._handleEntityChange(e, section, f.key)}>
                <option value="">(None)</option>
                ${allEntities.map(
                  (id) => html`
                    <option value="${id}" ?selected=${e[f.key] === id}>${id}</option>
                  `
                )}
              </select>
              <label>
                <input
                  type="checkbox"
                  .checked=${d.includes(f.key)}
                  @change=${(e: Event) => this._handleDisplayToggle(e, section, f.key)}
                />
                Show on card
              </label>
            </div>
          `
        )}
      </div>
    `;
  }

  render() {
    if (!this.hass || !this._config) return html``;
    return html`
      ${this._renderSection("Washer", "washer")}
      ${this._renderSection("Dryer", "dryer")}
    `;
  }
}
