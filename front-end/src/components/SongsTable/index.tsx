import React, { useState } from "react";
import * as _ from "lodash";
import { Song, SongsResponse } from "../../graphql/types";
import moment from "moment";
import "./styles.css";
import { songsColumnsName, SORT_QUEUE } from "./consts";
import { TableHeader } from "./TableHeader";
import { SortDirection } from "./types";

type Props = {
  songs: SongsResponse;
};

const buildSortedList = (
  songs: SongsResponse,
  columnToSort: string,
  sortDirection?: SortDirection
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

  const songsList = buildSortedList(songs, sortColumn, sortDirection);

  return (
    <div className="songsTable">
      <TableHeader
        handleOnColumnClicked={handleOnColumnClicked}
        sortColumn={sortColumn}
        sortDirection={sortDirection}
      />
      {_.map(songsList, (song: any) => {
        return songsColumnsName.map((column) => {
          return <div>{song[column]}</div>;
        });
      })}
    </div>
  );
};

export default Table;
