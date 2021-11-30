import _ from "lodash";
import React from "react";
import { Song } from "../../graphql/types";
import { SONGS_COLUMNS_NAME } from "./consts";

type Props = {
  songs: Song[];
};

export const TableBody: React.FC<Props> = ({ songs }) => {
  return (
    <>
      {_.map(songs, (song: Song) => {
        return SONGS_COLUMNS_NAME.map((column) => {
          return (
            <div data-testid={`${song.song}_${song.artist}_${column.value}`}>
              {song[column.value]}
            </div>
          );
        });
      })}
    </>
  );
};
