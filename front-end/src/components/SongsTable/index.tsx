import React, { useState } from "react";
import { SongsResponse } from "../../api/songs";
import * as _ from "lodash";
import "./styles.css";

type Props = {
  songs: SongsResponse;
};

const SORT_DIRECTION = {
  ASCENDING: "ASC",
  DESCENDING: "DESC",
};

const Table: React.FC<Props> = ({ songs }) => {
  const [sortColumn, setSortColumn] = useState<string>("");
  const [sortDirection, setSortDirection] = useState("asc");

  const handleOnColumnClicked = (column: string) => {
    const previousSortColumn = sortColumn;
    setSortColumn(column);
    setSortDirection(
      previousSortColumn === column
        ? SORT_DIRECTION.ASCENDING
        : SORT_DIRECTION.DESCENDING
    );
  };

  const columnsName = Object.keys(songs[0]);
  return (
    <div className="songsTable">
      {columnsName.map((column) => {
        return (
          <div
            className="columnTitle"
            onClick={() => handleOnColumnClicked(column)}
          >
            {column}
            {sortColumn === column
              ? sortDirection === SORT_DIRECTION.ASCENDING
                ? "/\\"
                : "\\/"
              : null}
          </div>
        );
      })}
      {_.sortBy(songs, [sortColumn]).map((song) => {
        return Object.values(song).map((value) => {
          return <div>{value}</div>;
        });
      })}
    </div>
  );
};

export default Table;
