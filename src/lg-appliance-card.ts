import { html, css, LitElement, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators.js";
import "./washer-card";
import "./dryer-card";
import type { HomeAssistant } from "custom-card-helpers";
import type { LGApplianceCardConfig } from "./types";

@customElement("lg-appliance-card")
export class LGApplianceCard extends LitElement {
  @property({ attribute: false }) hass!: HomeAssistant;
  @property({ type: Object }) private _config!: LGApplianceCardConfig;

  static styles = css`
    :host {
      display: block;
    }
    .wrapper {
      display: grid;
      gap: 1.5rem;
    }
    .error {
      padding: 1rem;
      font-weight: bold;
      color: red;
    }
  `;

  setConfig(config: LGApplianceCardConfig) {
    if (!config.washer?.entities && !config.dryer?.entities) {
      throw new Error("Washer or Dryer configuration must be provided.");
    }
    this._config = config;
  }

  getCardSize(): number {
    return 2;
  }

  render(): TemplateResult {
    if (!this._config || !this.hass) {
      return html`<div class="error">❌ LG Appliance Card is not configured correctly.</div>`;
    }

    const washerConfigured =
      this._config.washer?.enabled &&
      this._config.washer.entities &&
      Object.values(this._config.washer.entities).some(Boolean);

    const dryerConfigured =
      this._config.dryer?.enabled &&
      this._config.dryer.entities &&
      Object.values(this._config.dryer.entities).some(Boolean);

    if (!washerConfigured && !dryerConfigured) {
      return html`<div class="error">❌ LG Appliance Card: No valid washer or dryer entities defined.</div>`;
    }

    return html`
      <ha-card>
        <div class="wrapper">
          ${washerConfigured
            ? html`<washer-card .hass=${this.hass} .config=${this._config.washer}></washer-card>`
            : ""}
          ${dryerConfigured
            ? html`<dryer-card .hass=${this.hass} .config=${this._config.dryer}></dryer-card>`
            : ""}
        </div>
      </ha-card>
    `;
  }
}
