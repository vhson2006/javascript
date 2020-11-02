import { GraphQLString } from 'graphql';
import { authenticateResolver, getDetailResolver } from '../resolvers/account-resolver';
import accountType from '../types/account-type';

export const authenticate = {
  type: GraphQLString,
  args: {
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  resolve(parent, args, context) {
    return authenticateResolver(parent, args, context);
  },
};

export const getDetailAccount = {
  type: accountType,
  resolve(parent, args, context) {
    return getDetailResolver(parent, args, context);
  },
};
