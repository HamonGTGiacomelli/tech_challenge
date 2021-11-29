import React, { useState } from "react";
import * as _ from "lodash";
import { Song, SongsResponse } from "../../graphql/types";
import moment from "moment";
import "./styles.css";
import { SONGS_COLUMNS_NAME, SORT_DIRECTION_QUEUE } from "./consts";
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
  const [sortDirectionQueueIndex, setSortDirectionQueueIndex] = useState(0);

  const handleOnColumnClicked = (column: string) => {
    const previousSortColumn = sortColumn;
    setSortColumn(column);
    if (previousSortColumn !== column) {
      setSortDirectionQueueIndex(0);
    } else {
      const nextIndex =
        sortDirectionQueueIndex + 1 >= SORT_DIRECTION_QUEUE.length ? 0 : sortDirectionQueueIndex + 1;
      setSortDirectionQueueIndex(nextIndex);
    }
  };

  const sortDirection = SORT_DIRECTION_QUEUE[sortDirectionQueueIndex];
  const songsList = buildSortedList(songs, sortColumn, sortDirection);

  return (
    <div className="songsTable">
      <TableHeader
        handleOnColumnClicked={handleOnColumnClicked}
        sortColumn={sortColumn}
        sortDirection={sortDirection}
      />
      {_.map(songsList, (song: any) => {
        return SONGS_COLUMNS_NAME.map((column) => {
          return <div>{song[column.value]}</div>;
        });
      })}
    </div>
  );
};

export default Table;
