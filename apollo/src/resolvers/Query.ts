import { QueryResolvers } from '../generated/graphqlgen';

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,

  info: () => 'Hello World',

  users: (_parent, _args, ctx) => {
    return ctx.prisma.users();
  },
};
