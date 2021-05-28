import { GraphQLFieldConfig } from "graphql";
import ChatType from "../types/Chat";
import MessageInput, { MessageInputType } from "../inputs/Message";
import config from "config";

export const sendMessage: GraphQLFieldConfig<
  any,
  ApolloContext,
  MessageInputType
> = {
  description: "Message sending",
  type: ChatType,
  args: MessageInput,
  resolve: (
    _,
    { from, message }: MessageInputType,
    { pubsub }: ApolloContext
  ) => {
    const chat = { id: 0, from, message };
    pubsub.publish(config.get("CHAT_CHANNEL"), { messageSent: chat });
    return chat;
  },
};
