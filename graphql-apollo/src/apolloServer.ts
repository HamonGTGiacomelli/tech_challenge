import { ApolloServer } from 'apollo-server-lambda';

import { resolvers } from './resolvers/songs';
import { typeDefs } from './typeDefs/songs';

const apolloServer = new ApolloServer({ resolvers, typeDefs });

export const graphqlHandler = apolloServer.createHandler();