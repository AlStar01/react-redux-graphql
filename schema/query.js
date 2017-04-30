let { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');

let contactType = require('./types');
let resolveContacts = require('./resolvers');

const query = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        contacts: {
            type: new GraphQLList(contactType),
            resolve: resolveContacts
        }
    }
});

module.exports = query;