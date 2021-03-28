import Head from "next/head";
import { gql } from "@apollo/client";
import client from "../lib/apollo";
import Card from "../components/Card";
import { displayDistance } from "../utils/displayDistance";
import { LaunchPads } from "../types/generated/LaunchPads";

export const LAUNCH_PADS_QUERY = gql`
  query LaunchPads {
    launchpads {
      location {
        longitude
        latitude
        name
      }
      name
      details
      id
    }
  }
`;

export default function LaunchPadsPage({ launchpads }: LaunchPads) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Sam Öjling | Northvolt</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="px-20 container">
        {launchpads.map((launchpad) => (
          <div key={launchpad.id} className="mb-10">
            <Card
              name={launchpad.name}
              description={launchpad.details}
              metaData={[
                `${displayDistance(
                  launchpad.location.longitude,
                  launchpad.location.latitude,
                )}km from factory Ett`,
              ]}
            />
          </div>
        ))}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: LAUNCH_PADS_QUERY,
  });

  return {
    props: {
      launchpads: data.launchpads,
    },
  };
}
