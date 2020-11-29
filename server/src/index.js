const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");
const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const Subscription = require("./resolvers/Subscription");
const User = require("./resolvers/User");
const Link = require("./resolvers/Link");
const Vote = require("./resolvers/Vote");

const resolvers = {
  Query,
  Mutation,
  Subscription,
  User,
  Link,
  Vote,
};

const server = new GraphQLServer({
  typeDefs: "server/src/schema.graphql",
  resolvers,
  context: (request) => ({
    ...request,
    prisma,
  }),
});
server.start(() => console.log(`Server is running on http://localhost:4000`));

/*
{
  "name": "hackernews-node",
  "version": "1.0.0",
  "license": "MIT",
  "scripts": {
    "start": "node src/index.js",
    "dev": "npm-run-all --parallel start playground",
    "prisma": "prisma"
  },
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "graphql-yoga": "^1.7.0",
    "jsonwebtoken": "^8.2.0",
    "prisma-client-lib": "^1.31.0"
  },
  "devDependencies": {
    "prisma": "^1.31.0"
  }
}

 */
