import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import * as accountSchema from './account-schema';
import * as employeeSchema from './employee-schema';
import * as dashboardSchema from './dashboard-schema';
import * as mutationAccountSchema from './mutation-account-schema';

const query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    ...accountSchema,
    ...employeeSchema,
    ...dashboardSchema,
  },
});
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    ...mutationAccountSchema,
  },
});

const schema = new GraphQLSchema({ query, mutation });

export default schema;
