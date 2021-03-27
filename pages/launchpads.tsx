import Head from "next/head";
import { useEffect, useMemo } from "react";
import { gql } from "@apollo/client";
import client from "../lib/apollo";
import Card from "../components/Card";
import CardList from "../components/CardList";

export default function Home({ launchNext, rockets }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Sam Öjling | Northvolt</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="px-20 container">
        <CardList rockets={rockets} launchNext={launchNext} />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query Countries {
        launchNext {
          details
          launch_date_unix
          launch_date_local
        }
        rockets {
          id
          name
          description
          first_flight
          height {
            meters
          }
          landing_legs {
            number
          }
        }
      }
    `,
  });

  return {
    props: {
      launchNext: data.launchNext,
      rockets: data.rockets,
    },
  };
}