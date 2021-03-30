import { FilterTypes } from "./Filter";
export interface SelectTypes {
  label: string;
  value: string;
  onChange: (event: any) => void;
  filterOptions: {
    [key: string]: {
      label: string;
      filterFunc: ({ rocketA, rocketB }: FilterTypes) => number;
    };
  };
}
