import NextAuth from 'next-auth';
import Adapters from 'next-auth/adapters';
import Providers from 'next-auth/providers';

import Models from '../../../models';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  adapter: Adapters.TypeORM.Adapter(
    // The first argument should be a database connection string or TypeORM config object
    process.env.DATABASE_URL,
    // The second argument can be used to pass custom models and schemas
    {
      models: {
        ...Adapters.TypeORM.Models,
        User: Models.User,
      },
    },
  ),
  
  pages: {
    newUser: '/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  }

});
