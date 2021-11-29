import { SortDirection } from "./types";

export const SONGS_COLUMNS_NAME = [
    {value: "song", label: "Song"},
    {value: "artist", label: "Artist"},
    {value: "songReleaseDate", label: "Release Date"},
    {value: "playCount", label: "Play Count"},
    {value: "metricA", label: "Metric A"},
    {value: "metricB", label: "Metric B"},
    {value: "metricC", label: "Metric C"},
    {value: "metricD", label: "Metric D"},
    {value: "metricE", label: "Metric E"},
    {value: "metricF", label: "Metric F"},
    {value: "metricG", label: "Metric G"},
    {value: "metricH", label: "Metric H"},
    {value: "metricI", label: "Metric I"},
    {value: "metricJ", label: "Metric J"},
    {value: "metricK", label: "Metric K"},
    {value: "metricL", label: "Metric L"},
    {value: "metricM", label: "Metric M"},
    {value: "metricN", label: "Metric N"},
    {value: "metricO", label: "Metric O"},
    {value: "metricP", label: "Metric P"},
    {value: "metricCi", label: "Metric Ci"}
  ];

  export const SORT_DIRECTION = {
    ASCENDING: "asc" as SortDirection,
    DESCENDING: "desc" as SortDirection,
    NONE: undefined,
  };
  
  export const SORT_DIRECTION_QUEUE: (SortDirection | undefined)[] = [
    SORT_DIRECTION.ASCENDING,
    SORT_DIRECTION.DESCENDING,
    SORT_DIRECTION.NONE,
  ];