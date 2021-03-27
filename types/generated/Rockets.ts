/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Rockets
// ====================================================

export interface Rockets_launchNext {
  __typename: "Launch";
  details: string | null;
  launch_date_unix: any | null;
  launch_date_local: any | null;
}

export interface Rockets_rockets_height {
  __typename: "Distance";
  meters: number | null;
}

export interface Rockets_rockets_landing_legs {
  __typename: "RocketLandingLegs";
  number: number | null;
}

export interface Rockets_rockets {
  __typename: "Rocket";
  id: string | null;
  name: string | null;
  description: string | null;
  first_flight: any | null;
  height: Rockets_rockets_height | null;
  landing_legs: Rockets_rockets_landing_legs | null;
}

export interface Rockets {
  launchNext: Rockets_launchNext | null;
  rockets: (Rockets_rockets | null)[] | null;
}
