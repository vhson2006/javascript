import {
  GraphQLObjectType, GraphQLString, GraphQLID,
} from 'graphql';
import accountType from './account-type';
import { model } from '../models';

const employeeType = new GraphQLObjectType({
  name: 'employee',
  fields: () => ({
    id: { type: GraphQLID },
    account: {
      type: accountType,
      resolve(parent) {
        return model.account.findOne({
          where: {
            id: parent.accountId,
          },
        });
      },
    },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    address: { type: GraphQLString },
    gender: { type: GraphQLString },
    dateOfBirth: { type: GraphQLString },
    avatarUrl: { type: GraphQLString },
    deviceId: { type: GraphQLString },
    status: { type: GraphQLString },
    startDate: { type: GraphQLString },
    endDate: { type: GraphQLString },
  }),
});

export default employeeType;
