import { Rockets_rockets } from "./generated/Rockets";
import { LaunchPads_launchpads } from "./generated/LaunchPads";

export interface CardListTypes {
  showImage?: boolean;
  data: Rockets_rockets[] | LaunchPads_launchpads[];
  metaData: (metaData: LaunchPads_launchpads | Rockets_rockets) => string[];
}
