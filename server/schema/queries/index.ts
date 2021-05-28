import { GraphQLList, GraphQLObjectType } from "graphql";
import ChatType from "../types/Chat";

const chats = [];

export default new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    chats: {
      description: "Chats list",
      type: GraphQLList(ChatType),
      resolve: () => chats,
    },
  }),
});
