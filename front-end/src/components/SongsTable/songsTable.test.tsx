import React from "react";
import ReactDOM from "react-dom";
import { SongsTable } from ".";

import {render} from "@testing-library/react";
import "@testing-library/jest-dom";
import { Song } from "../../graphql/types";

const songsList: Song[] = [
  {
    song:"A",
    artist:"A",
    songReleaseDate:"01/01/2020",
    playCount: 10,
    metricA: 0,
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
    song:"B",
    artist:"B",
    songReleaseDate:"01/02/2020",
    playCount: 20,
    metricA: 0,
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
    metricA: 0,
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
  }
];

it("Render empty table", () => {
  const {getByTestId} = render(<SongsTable songs={[]}></SongsTable>);
  expect(getByTestId("emptyBody")).toBeVisible();
});

it("Render filled table", () => {
  const {getByTestId} = render(<SongsTable songs={songsList}></SongsTable>);
  expect(getByTestId("A_A_song")).toHaveTextContent("A");
  expect(getByTestId("B_B_artist")).toHaveTextContent("B");
  expect(getByTestId("C_C_songReleaseDate")).toHaveTextContent("01/03/2020");
  expect(getByTestId("B_B_playCount")).toHaveTextContent("20");
});
