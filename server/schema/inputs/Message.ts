import {
  GraphQLInputFieldConfigMap,
  GraphQLNonNull,
  GraphQLString,
} from "graphql";

export type MessageInputType = {
  from: String;
  message: String;
};

const MessageInput: GraphQLInputFieldConfigMap = {
  from: {
    description: "Sender name",
    type: GraphQLNonNull(GraphQLString),
  },
  message: {
    description: "Message text",
    type: GraphQLNonNull(GraphQLString),
  },
};

export default MessageInput;
