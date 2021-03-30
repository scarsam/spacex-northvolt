import { Rockets_rockets } from "./generated/Rockets";

export interface FilterTypes {
  rocketA: Rockets_rockets;
  rocketB: Rockets_rockets;
}

export interface FilterByTypes {
  filter: (rockets: FilterTypes) => number;
  unsortedData: Rockets_rockets[];
}
