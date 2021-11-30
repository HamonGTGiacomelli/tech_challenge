import _ from "lodash";
import React from "react";
import { Song } from "../../graphql/types";
import { SONGS_COLUMNS_NAME } from "./consts";

type Props = {
  songs: Song[];
};

export const TableBody: React.FC<Props> = ({ songs }) => {
  if (songs.length > 0) {
    return (
      <>
        {_.map(songs, (song: Song) => {
          return SONGS_COLUMNS_NAME.map((column) => {
            return (
              <div key={`${song.song}_${song.artist}_${column.value}`} data-testid={`data_${column.value}`}>
                {song[column.value]}
              </div>
            );
          });
        })}
      </>
    );
  }
  return <div data-testid="emptyBody" className="emptyBody">No Songs found</div>;
};
