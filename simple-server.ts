
import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    users: [String!]!
  }

  type Mutation {
    createUser(name: String!): String!
  }
`

// Criando uma variavel para armazenar usuários fake
const users : string[] = [];

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      users: () => {
        return users
      }
    },

    Mutation: {
      createUser: (parent, args, context) => {
        users.push(args.name);

        return args.name
      }
    }
  }
})

server.listen().then(({ url }) => {
  console.log(`HTTP server running on ${url}`)
})