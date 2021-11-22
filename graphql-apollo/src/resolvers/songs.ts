import { fetchSongsJSONFile, storeSongsJSONFile } from "../models/songs";

export const resolvers = {
  Query: {
    getSongs: async () => {
      return await fetchSongsJSONFile();
    },
  },
  Mutation: {
    storeSongs: async () => {
      return await storeSongsJSONFile();
    },
  },
};
