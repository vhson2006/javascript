import {
  GraphQLObjectType, GraphQLString, GraphQLID,
} from 'graphql';

const accountType = new GraphQLObjectType({
  name: 'account',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
    address: { type: GraphQLString },
    status: { type: GraphQLString },
    checkIn: { type: GraphQLString },
    checkOut: { type: GraphQLString },
    ipAddress: { type: GraphQLString },
    latitude: { type: GraphQLString },
    longitude: { type: GraphQLString },
    fixDevice: { type: GraphQLString },
    joinDate: { type: GraphQLString },
    dueDate: { type: GraphQLString },
  }),
});

export default accountType;
