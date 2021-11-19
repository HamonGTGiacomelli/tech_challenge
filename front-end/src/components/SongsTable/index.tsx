import React, { useState } from "react";
import * as _ from "lodash";
import { Song, SongsResponse } from "../../graphql/types";
import moment from "moment";
import "./styles.css";

type Props = {
  songs: SongsResponse;
};

type SortDirection = "asc" | "desc";

const SORT_DIRECTION = {
  ASCENDING: "asc" as SortDirection,
  DESCENDING: "desc" as SortDirection,
  NONE: undefined,
};

const SORT_QUEUE: (SortDirection | undefined)[] = [
  SORT_DIRECTION.ASCENDING,
  SORT_DIRECTION.DESCENDING,
  SORT_DIRECTION.NONE,
];

const columnsName = [
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

const buildSortedList = (
  songs: SongsResponse,
  sortDirection: SortDirection | undefined,
  columnToSort: string
) => {
  const sortValue = [
    columnToSort === "songReleaseDate"
      ? (value: Song) =>
          moment(value.songReleaseDate, "DD/MM/YYYYYY").toISOString()
      : columnToSort,
  ];
  return sortDirection ? _.orderBy(songs, sortValue, [sortDirection]) : songs;
};

const Table: React.FC<Props> = ({ songs }) => {
  const [sortColumn, setSortColumn] = useState<string>("");
  const [sortDirection, setSortDirection] = useState<
    SortDirection | undefined
  >();
  const [sortQueueIndex, setSortQueueIndex] = useState(0);

  const handleOnColumnClicked = (column: string) => {
    const previousSortColumn = sortColumn;
    setSortColumn(column);
    if (previousSortColumn !== column) {
      setSortQueueIndex(0);
      setSortDirection(SORT_QUEUE[0]);
    } else {
      const nextIndex =
        sortQueueIndex + 1 >= SORT_QUEUE.length ? 0 : sortQueueIndex + 1;
      setSortQueueIndex(nextIndex);
      setSortDirection(SORT_QUEUE[nextIndex]);
    }
  };

  const songsList = buildSortedList(songs, sortDirection, sortColumn);

  return (
    <div className="songsTable">
      {columnsName.map((column) => {
        return (
          <div
            key={column}
            className="columnTitle"
            onClick={() => handleOnColumnClicked(column)}
          >
            <span>{column}</span>
            {sortColumn === column ? (
              sortDirection === SORT_DIRECTION.ASCENDING ? (
                <span>/\</span>
              ) : sortDirection === SORT_DIRECTION.DESCENDING ? (
                <span>\/</span>
              ) : null
            ) : null}
          </div>
        );
      })}
      {_.map(songsList, (song: any) => {
        return columnsName.map((column) => {
          return <div>{song[column]}</div>;
        });
      })}
    </div>
  );
};

export default Table;
