import { ApolloClient, InMemoryCache } from "@apollo/client";
import CONST from "../utils/constant";

const client = new ApolloClient({
  uri: CONST.GQL_BASEURL,
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret": CONST.HASURA_KEY,
  },
});
export default client;
