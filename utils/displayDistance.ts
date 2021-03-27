import { getDistance, convertDistance } from "geolib";

export const displayDistance = (longitude, latitude) => {
  const distance = getDistance(
    { latitude: 64.92499716220854, longitude: 21.04076199020147 },
    { latitude, longitude },
  );

  return Math.floor(convertDistance(distance, "km"));
};
// 64.92499716220854, 21.04076199020147;
