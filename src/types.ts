export interface LGApplianceCardConfig {
  type: string;
  washer?: LGApplianceConfig;
  dryer?: LGApplianceConfig;
}

export interface LGApplianceConfig {
  enabled: boolean;
  entities: Partial<{
    power: string;
    remaining_time: string;
    initial_time: string;
    run_state: string;
    run_completed: string;
    course: string;
    spin_speed: string;
    water_temp: string;
  }>;
  display: string[]; // which keys to show from the above
}
