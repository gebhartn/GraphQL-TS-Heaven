import { ApolloServer, gql } from 'apollo-server';
import { importSchema } from 'graphql-import';

import resolvers from './resolvers';
import context from './context';
import environment from './environment';

(async (): Promise<void> => {
  const schema = await importSchema('src/schema.graphql');

  const server = new ApolloServer({
    resolvers,
    typeDefs: gql(schema),
    context,
    playground: environment.apollo.playground,
    introspection: environment.apollo.introspection,
    cors: environment.apollo.cors,
  } as any);

  const { url } = await server.listen(environment.port);
  console.log(`\n${url}\n`);
})();
