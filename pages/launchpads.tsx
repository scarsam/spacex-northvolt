import Head from "next/head";
import { gql } from "@apollo/client";
import client from "../lib/apollo";
import { displayDistance } from "../utils/displayDistance";
import { LaunchPads } from "../src/types/generated/LaunchPads";
import { LaunchPads_launchpads } from "../src/types/generated/LaunchPads";
import Container from "../components/layout/Container";
import CardList from "../components/CardList";

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

      <Container>
        <CardList
          showImage={false}
          data={launchpads}
          metaData={(launchpad: LaunchPads_launchpads) => [
            `${displayDistance(
              launchpad?.location?.longitude,
              launchpad?.location?.latitude,
            )}km from factory Ett`,
          ]}
        />
      </Container>
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
