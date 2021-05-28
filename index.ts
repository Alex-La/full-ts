import express from "express";
import http from "http";
import { ApolloServer, PubSub } from "apollo-server-express";
import config from "config";
import schema from "./server/schema";
import { mongoConnect } from "./server/utils";

import SenderAPI from "./server/datasources/Sender";

declare global {
  type ApolloContext = {
    pubsub: PubSub;
    dataSources: {
      senderAPI: SenderAPI;
    };
  };
}

mongoConnect();

const pubsub = new PubSub();
const server = new ApolloServer({
  schema,
  dataSources: () => ({
    senderAPI: new SenderAPI(),
  }),
  context: { pubsub },
  subscriptions: {
    path: "/subscriptions",
  },
});

const app = express();
const httpServer = http.createServer(app);
server.applyMiddleware({ app });
server.installSubscriptionHandlers(httpServer);

const PORT = config.get("PORT");
httpServer.listen(PORT, () => {
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
  console.log(
    `🚀 Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`
  );
});
