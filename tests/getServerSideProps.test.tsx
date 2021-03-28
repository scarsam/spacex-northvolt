import { getStaticProps } from "../pages/index";

jest.mock("../lib/apollo.ts", () => ({
  query: jest.fn().mockReturnValueOnce({
    data: {
      launchNext: {
        details:
          "SpaceX's 21st ISS resupply mission on behalf of NASA and the first under the CRS-2 contract, this mission brings essential supplies to the International Space Station using the cargo variant of SpaceX's Dragon 2 spacecraft. The external payload for this mission is the Nanoracks Bishop Airlock. Falcon 9 and Dragon launch from LC-39A, Kennedy Space Center and the booster is expected to land on an ASDS. The mission will be complete with return and recovery of the Dragon capsule and down cargo.",
        launch_date_unix: 1607271420,
      },
      rockets: [{ name: "Falcon 1" }, { name: "Falcon 9" }],
    },
    loading: false,
    errors: [],
  }),
}));

describe("getStaticProps", () => {
  it("should call dog api", async () => {
    const response = await getStaticProps();
    expect(response).toEqual(
      expect.objectContaining({
        props: {
          launchNext: {
            details:
              "SpaceX's 21st ISS resupply mission on behalf of NASA and the first under the CRS-2 contract, this mission brings essential supplies to the International Space Station using the cargo variant of SpaceX's Dragon 2 spacecraft. The external payload for this mission is the Nanoracks Bishop Airlock. Falcon 9 and Dragon launch from LC-39A, Kennedy Space Center and the booster is expected to land on an ASDS. The mission will be complete with return and recovery of the Dragon capsule and down cargo.",
            launch_date_unix: 1607271420,
          },
          rockets: [{ name: "Falcon 1" }, { name: "Falcon 9" }],
        },
      }),
    );
  });
});
