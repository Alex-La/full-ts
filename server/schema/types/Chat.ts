import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

export default new GraphQLObjectType({
  name: "Chat",
  description: "Instance of message: room id, sender data and message.",
  fields: () => ({
    id: {
      description: "Room id.",
      type: GraphQLNonNull(GraphQLInt),
    },
    from: {
      description: "Name of user, that send a message.",
      type: GraphQLNonNull(GraphQLString),
    },
    message: {
      description: "Text of sended message.",
      type: GraphQLNonNull(GraphQLString),
    },
  }),
});
