import { render, act, fireEvent, waitFor } from "@testing-library/react";
import Home from "../pages/index";

jest.mock("../lib/apollo.ts", () => ({
  query: jest.fn(),
}));

jest.mock("../utils/countdown", () => ({
  remainingTime: jest.fn().mockReturnValue({
    distance: 23,
    days: 11,
    hours: 3,
    minutes: 15,
    seconds: 62,
  }),
}));

const mocks = {
  rockets: [
    {
      __typename: "Rocket",
      id: "falcon1",
      name: "Falcon 1",
      description:
        "The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.",
      first_flight: "2006-03-24",
      height: { __typename: "Distance", meters: 32 },
      landing_legs: {
        __typename: "RocketLandingLegs",
        number: 10,
      },
    } as const,
    {
      __typename: "Rocket",
      id: "falcon9",
      name: "Falcon 9",
      description:
        "Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.",
      first_flight: "2010-06-04",
      height: { __typename: "Distance", meters: 43 },
      landing_legs: {
        __typename: "RocketLandingLegs",
        number: 2,
      },
    } as const,
  ],
  launchNext: {
    __typename: "Launch",
    details:
      "SpaceX's 21st ISS resupply mission on behalf of NASA and the first under the CRS-2 contract, this mission brings essential supplies to the International Space Station using the cargo variant of SpaceX's Dragon 2 spacecraft. The external payload for this mission is the Nanoracks Bishop Airlock. Falcon 9 and Dragon launch from LC-39A, Kennedy Space Center and the booster is expected to land on an ASDS. The mission will be complete with return and recovery of the Dragon capsule and down cargo.",
    launch_date_unix: 1607271420,
    launch_date_local: "2020-12-06T11:17:00-05:00",
  } as const,
};

describe("Home", () => {
  it("should render rocket information", async () => {
    const { findByText } = render(
      <Home launchNext={mocks.launchNext} rockets={mocks.rockets} />,
    );

    const landingLegsConten = await findByText("10 landing legs");
    const metersContent = await findByText("43 meters");
    const firstFlightContent = await findByText("First flight 2006-02-04");

    expect(landingLegsConten).toBeInTheDocument();
    expect(metersContent).toBeInTheDocument();
    expect(firstFlightContent).toBeInTheDocument();
  });

  it("should filter rockets by height", async () => {
    const { getByLabelText, queryAllByText } = render(
      <Home launchNext={mocks.launchNext} rockets={mocks.rockets} />,
    );

    const rockets = queryAllByText(/meters/);
    expect(rockets).toHaveLength(2);
    expect(rockets[0]).toHaveTextContent("32 meters");
    expect(rockets[1]).toHaveTextContent("43 meters");

    act(() => {
      fireEvent.change(getByLabelText("Sort by"), {
        target: { value: "height" },
      });
    });

    const sortedRockets = queryAllByText(/meters/);
    expect(rockets).toHaveLength(2);
    expect(sortedRockets[0]).toHaveTextContent("43 meters");
    expect(sortedRockets[1]).toHaveTextContent("32 meters");
  });

  it("should display the next launch time", async () => {
    const { queryByText } = render(
      <Home launchNext={mocks.launchNext} rockets={mocks.rockets} />,
    );

    await waitFor(() => {
      const contdownContent = queryByText("11d 3h 15m 62s");
      expect(contdownContent).toBeInTheDocument();
    });
  });
});
