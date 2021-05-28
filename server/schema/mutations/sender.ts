import { GraphQLFieldConfig } from "graphql";
import { SenderType } from "../types/Sender";
import SenderInput, { MessageInputType } from "../inputs/Sender";

export const initRoom: GraphQLFieldConfig<
  any,
  ApolloContext,
  MessageInputType
> = {
  description: "Initialize room from user",
  type: SenderType,
  args: SenderInput,
  resolve: async (
    _,
    { host, email, name }: MessageInputType,
    { dataSources }: ApolloContext
  ) => await dataSources.senderAPI.createSender({ host, email, name }),
};
