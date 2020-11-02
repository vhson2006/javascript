import { GraphQLString, GraphQLList } from 'graphql';
import { getDashboardResolver } from '../resolvers/dashboard-resolver';
import dashboardType from '../types/dashboard-type';

export const getDashboard = {
  type: new GraphQLList(dashboardType),
  args: {
    type: { type: GraphQLString },
  },
  resolve(parent, args, context) {
    return getDashboardResolver(parent, args, context);
  },
};
