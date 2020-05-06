import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Planet {
    name: String!
    mass: Float
    hasStation: Boolean
  }

  type Station {
    id: Int!
    planetName: String!
    createdAt: String!
  }

  type Query {
    planets(pages: Int): [Planet!]
    suitablePlanets(pages: Int): [Planet!]
  }

  type Mutation {
    installStation(planetName: String!): Station!
  }
`;
