let {
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLID
} = require('graphql');
let { contactType } = require('./types');
let { resolveContacts } = require('./resolvers');

const query = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        contacts: {
            type: new GraphQLList(contactType),
            args: {
                id: {
                    type: GraphQLID
                },
                name: {
                    type: GraphQLString
                }
            },
            resolve: resolveContacts
        }
    }
});

module.exports = query;