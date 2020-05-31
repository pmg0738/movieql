import { GraphQLServer } from "graphql-yoga"; 
import resolvers from "./graphql/resolver";

// const resolvers = {
//   Query: {
//     hello: (_, { name }) => `Hello ${name || 'World'}`,
//   },
// }

const server = new GraphQLServer({ 
    typeDefs: "./graphql/schema.graphql",
    resolvers: resolvers
});

server.start(() => console.log("server running!!"));