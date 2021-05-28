import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";

export const SenderType = new GraphQLObjectType({
  name: "Sender",
  description: "Initialized room and user data.",
  fields: () => ({
    id: {
      description: "Room id.",
      type: GraphQLNonNull(GraphQLString),
    },
    host: {
      description: "Host name.",
      type: GraphQLNonNull(GraphQLString),
    },
    email: {
      description: "User email.",
      type: GraphQLNonNull(GraphQLString),
    },
    name: {
      description: "User name.",
      type: GraphQLNonNull(GraphQLString),
    },
  }),
});
