
import { ApolloServer, gql } from "apollo-server";
import { randomUUID } from 'node:crypto';

// Esta API segue uma abordagem de Schema first -> Criação da schema primeiro do codigo

const typeDefs = gql`
  type UserType {
    id: String!
    name: String!
  }

  type Query {
    users: [UserType!]!
  }

  type Mutation {
    createUser(name: String!): UserType!
  }
`

type UserType = {
  id: string;
  name: string;
}

// Criando uma variavel para armazenar usuários fake
const users : UserType[] = [];

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      users: () => {
        return users
      }
    },

    Mutation: {
      createUser: (_, args) => {
        let user = {
          id: randomUUID(),
          name: args.name
        }

        users.push(user);

        return user
      }
    }
  }
})

server.listen().then(({ url }) => {
  console.log(`HTTP server running on ${url}`)
})