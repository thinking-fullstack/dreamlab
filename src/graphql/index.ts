import { toast } from 'react-toastify';
import { onError } from '@apollo/client/link/error';
import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client';

import { API_SERVER } from '../constants/config';

const errorLink = onError((e) => {
  if (e?.graphQLErrors) {
    e.graphQLErrors.map((graphQLError) => {
      toast(graphQLError.message, { type: 'error' });
    })
  } else {
    toast("Unknown Error", { type: 'error' });
  }
});

const link = from([errorLink, new HttpLink({ uri: `${API_SERVER}` })]);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});
