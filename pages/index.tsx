import Head from "next/head";
import { useEffect, useMemo } from "react";
import { gql } from "@apollo/client";
import client from "../lib/apollo";
import { useNextLaunch } from "../hooks/useNextLaunch";
import Card from "../components/Card";
import CardList from "../components/CardList";

export default function Home({ launchNext, rockets }) {
  const { days, hours, minutes, seconds } = useNextLaunch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-space-dark text-white">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-20 container">
        <time
          className="text-sm tracking-wide"
          dateTime={launchNext.launch_date_local}
        >
          <p>
            Next launch in:{" "}
            <strong className="tabular-nums">
              {days}d {hours}h {minutes}m {seconds}s
            </strong>
          </p>
        </time>

        <CardList rockets={rockets} />
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
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
