import { GraphQLObjectType } from "graphql";
import ChatType from "../types/Chat";
import config from "config";

export default new GraphQLObjectType({
  name: "Subscription",
  fields: () => ({
    messageSent: {
      description: "Listen for sended message.",
      type: ChatType,
      subscribe: (_, __, { pubsub }: ApolloContext) =>
        pubsub.asyncIterator(config.get("CHAT_CHANNEL")),
    },
  }),
});
