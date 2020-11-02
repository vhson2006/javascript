import { GraphQLBoolean, GraphQLString } from 'graphql';
import {
  registerResolver, resetPasswordResolver, activateAccountResolver, updateAccountResolver,
} from '../resolvers/account-resolver';
import accountType from '../types/account-type';

export const register = {
  type: GraphQLBoolean,
  args: {
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    gender: { type: GraphQLString },
    phone: { type: GraphQLString },
    address: { type: GraphQLString },
  },
  resolve(parent, args) {
    return registerResolver(parent, args);
  },
};

export const resetPassword = {
  type: GraphQLBoolean,
  args: {
    token: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  resolve(parent, args) {
    return resetPasswordResolver(parent, args);
  },
};

export const activateAccount = {
  type: GraphQLBoolean,
  args: {
    token: { type: GraphQLString },
  },
  resolve(parent, args) {
    return activateAccountResolver(parent, args);
  },
};

export const updateAccount = {
  type: accountType,
  args: {
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    address: { type: GraphQLString },
    fixDevice: { type: GraphQLString },
    checkIn: { type: GraphQLString },
    checkOut: { type: GraphQLString },
    ipAddress: { type: GraphQLString },
    latitude: { type: GraphQLString },
    longitude: { type: GraphQLString },
    joindate: { type: GraphQLString },
    duedate: { type: GraphQLString },
  },
  resolve(parent, args, context) {
    return updateAccountResolver(parent, args, context);
  },
};
