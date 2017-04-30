let { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');

let contactType = require('./types');

const query = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        hello: {
            type: GraphQLString,
            resolve: () => 'Hello World!'
        }
    }
});

module.exports = query;