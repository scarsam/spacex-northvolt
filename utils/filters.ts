export const height = (rocketA, rocketB) =>
  rocketA.height.meters - rocketB.height.meters;

export const id = (rocketA, rocketB) => rocketA.id - rocketB.id;

export const costPerLaunch = (rocketA, rocketB) =>
  rocketA.cost_per_launch - rocketB.cost_per_launch;

export const numberOfLandingLegs = (rocketA, rocketB) =>
  rocketA.landing_legs.number - rocketB.landing_legs.number;

export const filterDataBy = (filter, unsortedData) => {
  const sortedData = unsortedData.sort((rocketA, rocketB) =>
    filter(rocketA, rocketB),
  );

  return sortedData;
};
