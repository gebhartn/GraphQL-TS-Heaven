interface Environment {
  apollo: {
    playground: boolean;
    introspection: boolean;
    cors: boolean;
  };
  port: string | number;
}

export default {
  apollo: {
    introspection: process.env.APOLLO_INTROSPECTION === 'true',
    playground: process.env.APOLLO_PLAYGROUND === 'true',
    cors: process.env.APOLLO_CORS === 'true',
  },
  port: process.env.PORT || 8000,
} as Environment;
