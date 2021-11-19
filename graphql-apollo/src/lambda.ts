import { gql, ApolloServer } from "apollo-server-lambda";

const IS_LOCAL = !!process.env.IS_LOCAL;

const typeDefs = gql`
  type Query {
    getSongs: [Song]
  }

  type Song {
    song: String!
    artist: String!
    songReleaseDate: String!
    playCount: Int!
    metricA: Int!
    metricB: Int!
    metricC: Int
    metricD: Int!
    metricE: Int!
    metricF: Int!
    metricG: Int!
    metricH: Int!
    metricI: Int!
    metricJ: Int!
    metricK: Int!
    metricL: Int!
    metricM: Int!
    metricN: Int!
    metricO: Int!
    metricP: Int!
    metricCi: Int
  }
`;

const resolvers = {
  Query: {
    getSongs: () => require("./asset/songData.json"),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: IS_LOCAL,
});

export const handler = server.createHandler();