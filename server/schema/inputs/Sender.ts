import {
  GraphQLInputFieldConfigMap,
  GraphQLNonNull,
  GraphQLString,
} from "graphql";

export type MessageInputType = {
  host: String;
  email: String;
  name: String;
};

const SenderInput: GraphQLInputFieldConfigMap = {
  host: {
    description: "User host",
    type: GraphQLNonNull(GraphQLString),
  },
  email: {
    description: "User email",
    type: GraphQLNonNull(GraphQLString),
  },
  name: {
    description: "Name text",
    type: GraphQLNonNull(GraphQLString),
  },
};

export default SenderInput;
