export type SongsResponse = {
  song: string;
  artist: string;
  songReleaseDate: string;
  playCount: number;
  metricA: number;
  metricB: number;
  metricC: number;
  metricD: number;
  metricE: number;
  metricF: number;
  metricG: number;
  metricH: number;
  metricI: number;
  metricJ: number;
  metricK: number;
  metricL: number;
  metricM: number;
  metricN: number;
  metricO: number;
  metricP: number;
  metricCi?: number;
}[];

export const fetchSongs = (): SongsResponse => {
  return require("./songData.json");
};
