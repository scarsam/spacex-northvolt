import { render, act, fireEvent } from "@testing-library/react";
import LaunchPadsPage from "../pages/launchpads";

jest.mock("../lib/apollo.ts", () => ({
  query: jest.fn(),
}));

const mocks = {
  launchpads: [
    {
      __typename: "Launchpad",
      location: {
        __typename: "Location",
        longitude: -120.610829,
        latitude: 34.632093,
        name: "Vandenberg Air Force Base",
      },
      name: "Vandenberg Air Force Base Space Launch Complex 4E",
      details:
        "SpaceX primary west coast launch pad for polar orbits and sun synchronous orbits, primarily used for Iridium. Also intended to be capable of launching Falcon Heavy.",
      id: "vafb_slc_4e",
    } as const,
    {
      __typename: "Launchpad",
      location: {
        __typename: "Location",
        longitude: -80.6039558,
        latitude: 28.6080585,
        name: "Cape Canaveral",
      },
      name: "Kennedy Space Center Historic Launch Complex 39A",
      details:
        "NASA historic launch pad that launched most of the Saturn V and Space Shuttle missions. Initially for Falcon Heavy launches, it is now launching all of SpaceX east coast missions due to the damage from the AMOS-6 anomaly. After SLC-40 repairs are complete, it will be upgraded to support Falcon Heavy, a process which will take about two months. In the future it will launch commercial crew missions and the Interplanetary Transport System.",
      id: "ksc_lc_39a",
    } as const,
  ],
};

describe("LaunchPadsPage", () => {
  it("should display the distance to factory Ett", async () => {
    const { findByText } = render(
      <LaunchPadsPage launchpads={mocks.launchpads} />,
    );

    const nameContent = await findByText(
      "Kennedy Space Center Historic Launch Complex 39A",
    );
    const distanceinKmContent = await findByText("7679km from factory Ett");

    expect(nameContent).toBeInTheDocument();
    expect(distanceinKmContent).toBeInTheDocument();
  });
});
