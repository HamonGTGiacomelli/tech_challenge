import { SortDirection } from "./types";

export const songsColumnsName = [
    "song",
    "artist",
    "songReleaseDate",
    "playCount",
    "metricA",
    "metricB",
    "metricC",
    "metricD",
    "metricE",
    "metricF",
    "metricG",
    "metricH",
    "metricI",
    "metricJ",
    "metricK",
    "metricL",
    "metricM",
    "metricN",
    "metricO",
    "metricP",
    "metricCi",
  ];

  export const SORT_DIRECTION = {
    ASCENDING: "asc" as SortDirection,
    DESCENDING: "desc" as SortDirection,
    NONE: undefined,
  };
  
  export const SORT_QUEUE: (SortDirection | undefined)[] = [
    SORT_DIRECTION.ASCENDING,
    SORT_DIRECTION.DESCENDING,
    SORT_DIRECTION.NONE,
  ];