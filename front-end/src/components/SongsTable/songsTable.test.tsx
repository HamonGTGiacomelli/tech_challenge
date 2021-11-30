import React from "react";
import { SongsTable } from ".";

import {render} from "@testing-library/react";
import "@testing-library/jest-dom";
import { Song } from "../../graphql/types";

const songsList: Song[] = [
  {
    song:"B",
    artist:"B",
    songReleaseDate:"01/01/2020",
    playCount: 20,
    metricA: 4,
    metricB: 0,
    metricC: 0,
    metricD: 0,
    metricE: 0,
    metricF: 0,
    metricG: 0,
    metricH: 0,
    metricI: 0,
    metricJ: 0,
    metricK: 0,
    metricL: 0,
    metricM: 0,
    metricN: 0,
    metricO: 0,
    metricP: 0,
    metricCi: 0,
  },
  {
    song:"C",
    artist:"C",
    songReleaseDate:"01/03/2020",
    playCount: 30,
    metricA: 3,
    metricB: 0,
    metricC: 0,
    metricD: 0,
    metricE: 0,
    metricF: 0,
    metricG: 0,
    metricH: 0,
    metricI: 0,
    metricJ: 0,
    metricK: 0,
    metricL: 0,
    metricM: 0,
    metricN: 0,
    metricO: 0,
    metricP: 0,
    metricCi: 0,
  },
  {
    song:"A",
    artist:"A",
    songReleaseDate:"01/02/2020",
    playCount: 10,
    metricA: 1,
    metricB: 0,
    metricC: 0,
    metricD: 0,
    metricE: 0,
    metricF: 0,
    metricG: 0,
    metricH: 0,
    metricI: 0,
    metricJ: 0,
    metricK: 0,
    metricL: 0,
    metricM: 0,
    metricN: 0,
    metricO: 0,
    metricP: 0,
    metricCi: 0,
  },
];

it("Render empty table", () => {
  const {getByTestId} = render(<SongsTable songs={[]}></SongsTable>);
  expect(getByTestId("emptyBody")).toBeVisible();
});

it("Order without sort", () => {
  const {getAllByTestId} = render(<SongsTable songs={songsList}></SongsTable>);
  expect(getAllByTestId("data_song")[0]).toHaveTextContent("B");
  expect(getAllByTestId("data_artist")[1]).toHaveTextContent("C");
  expect(getAllByTestId("data_songReleaseDate")[2]).toHaveTextContent("01/02/2020");
  expect(getAllByTestId("data_playCount")[1]).toHaveTextContent("30");
});

it("Sort by song asc", () => {
  const {getAllByTestId, getByTestId} = render(<SongsTable songs={songsList}></SongsTable>);
  getByTestId("columnHeader_song").click(); // sort by desc
  expect(getAllByTestId("data_song")[0]).toHaveTextContent("A");
  expect(getAllByTestId("data_song")[1]).toHaveTextContent("B");
  expect(getAllByTestId("data_song")[2]).toHaveTextContent("C");
});

it("Sort by release date desc", () => {
  const {getAllByTestId, getByTestId} = render(<SongsTable songs={songsList}></SongsTable>);
  getByTestId("columnHeader_songReleaseDate").click(); // sort by desc
  getByTestId("columnHeader_songReleaseDate").click(); // sort by asc
  expect(getAllByTestId("data_songReleaseDate")[0]).toHaveTextContent("01/03/2020");
  expect(getAllByTestId("data_songReleaseDate")[1]).toHaveTextContent("01/02/2020");
  expect(getAllByTestId("data_songReleaseDate")[2]).toHaveTextContent("01/01/2020");
});

it("Reset sort on metricA", () => {
  const {getAllByTestId, getByTestId} = render(<SongsTable songs={songsList}></SongsTable>);
  getByTestId("columnHeader_metricA").click(); // sort by desc
  getByTestId("columnHeader_metricA").click(); // sort by asc
  getByTestId("columnHeader_metricA").click(); // reset sort
  expect(getAllByTestId("data_metricA")[0]).toHaveTextContent("4");
  expect(getAllByTestId("data_metricA")[1]).toHaveTextContent("3");
  expect(getAllByTestId("data_metricA")[2]).toHaveTextContent("1");
});