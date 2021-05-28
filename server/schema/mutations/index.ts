import { GraphQLObjectType } from "graphql";
import { sendMessage } from "./sendMessage";
import { initRoom } from "./sender";

export default new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    sendMessage,
    initRoom,
  }),
});
