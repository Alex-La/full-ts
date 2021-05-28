import { GraphQLSchema } from "graphql";
import QueryType from "./queries";
import MutationType from "./mutations";
import SubscriptionType from "./subscriptions";

export default new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
  subscription: SubscriptionType,
});
