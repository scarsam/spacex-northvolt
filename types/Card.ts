import { Rockets_rockets } from "./generated/Rockets";

export interface CardTypes extends Rockets_rockets {
  showImage: boolean;
  metaData: string[];
}
