import {
  GraphQLObjectType, GraphQLString,
} from 'graphql';

const dashboardType = new GraphQLObjectType({
  name: 'dashboard',
  fields: () => ({
    value: { type: GraphQLString },
    lateArrival: { type: GraphQLString },
    earlyLeave: { type: GraphQLString },
    lateAndEarly: { type: GraphQLString },
    onTime: { type: GraphQLString },
    missing: { type: GraphQLString },
    leave: { type: GraphQLString },
  }),
});

export default dashboardType;
