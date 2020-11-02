import { GraphQLList } from 'graphql';
import { getEmployeesResolver } from '../resolvers/employee-resolver';
import employeeType from '../types/employee-type';

export const getEmployees = {
  type: new GraphQLList(employeeType),
  resolve(parent, args, context) {
    return getEmployeesResolver(parent, args, context);
  },
};
