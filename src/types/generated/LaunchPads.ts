/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: LaunchPads
// ====================================================

export interface LaunchPads_launchpads_location {
  __typename: "Location";
  longitude: number | null;
  latitude: number | null;
  name: string | null;
}

export interface LaunchPads_launchpads {
  __typename: "Launchpad";
  location: LaunchPads_launchpads_location | null;
  name: string | null;
  details: string | null;
  id: string | null;
}

export interface LaunchPads {
  launchpads: (LaunchPads_launchpads | null)[] | null;
}
