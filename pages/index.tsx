import { useState } from "react";
import Head from "next/head";
import { gql } from "@apollo/client";
import client from "../lib/apollo";
import Container from "../components/layout/Container";
import CardList from "../components/CardList";
import Select from "../components/Select";
import Countdown from "../components/Countdown";
import { rocketFilters, filterDataBy } from "../utils/filters";
import { displayDate } from "../utils/date";
import { Rockets } from "../types/generated/Rockets";
import { Rockets_rockets } from "../types/generated/Rockets";

export const ROCKET_QUERY = gql`
  query Rockets {
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
`;

export default function Home({ launchNext, rockets }: Rockets) {
  const [filter, setFilter] = useState("");
  const [filteredRockets, setFilteredRockets] = useState(rockets);

  const handleFilter = (event) => {
    const { filterFunc } = rocketFilters[event.target.value];
    setFilter(event.target.value);
    const result = filterDataBy({ filter: filterFunc, unsortedData: rockets });
    setFilteredRockets([...result]);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Sam Öjling | Northvolt</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Container>
        <div className="max-w-4xl m-auto flex flex-col sm:flex-row mb-4 justify-between sm:items-center">
          <Countdown launchDate={launchNext?.launch_date_local} />
          <Select
            label="Sort by"
            filterOptions={rocketFilters}
            value={filter}
            onChange={handleFilter}
          />
        </div>

        <CardList
          data={filteredRockets}
          metaData={(rocket: Rockets_rockets) => [
            `${rocket?.height?.meters} meters`,
            `${rocket?.landing_legs?.number} landing legs`,
            `First flight ${displayDate(rocket?.first_flight)}`,
          ]}
        />
      </Container>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: ROCKET_QUERY,
  });

  return {
    props: {
      launchNext: data.launchNext,
      rockets: data.rockets,
    },
  };
}
