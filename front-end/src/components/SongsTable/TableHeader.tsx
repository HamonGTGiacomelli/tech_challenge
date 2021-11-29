import React from "react";
import { songsColumnsName, SORT_DIRECTION } from "./consts";
import { ReactComponent as ArrowDown } from "../../assets/ArrowDown.svg";
import { ReactComponent as ArrowUp } from "../../assets/ArrowUp.svg";
import { SortDirection } from "./types";

type Props = {
  handleOnColumnClicked: (column: string) => void;
  sortColumn: string;
  sortDirection?: SortDirection;
};

const IconPlaceholder = () => {
  return <div className="iconPlaceholder" />;
};

const renderSort = (
  sortDirection?: SortDirection,
  isCurrentColumn?: boolean
) => {
  if (isCurrentColumn) {
    switch (sortDirection) {
      case SORT_DIRECTION.ASCENDING:
        return <ArrowUp className="sortIcon" />;
      case SORT_DIRECTION.DESCENDING:
        return <ArrowDown className="sortIcon" />;
    }
  }
  return <IconPlaceholder />;
};

export const TableHeader: React.FC<Props> = ({
  handleOnColumnClicked,
  sortColumn,
  sortDirection,
}) => {
  return (
    <>
      {songsColumnsName.map((column) => {
        return (
          <div
            key={column}
            className="columnTitle"
            onClick={() => handleOnColumnClicked(column)}
          >
            <span>{column}</span>
            {renderSort(sortDirection, sortColumn === column)}
          </div>
        );
      })}
    </>
  );
};
