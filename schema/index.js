let { GraphQLSchema } = require('graphql');

let query = require('./query');

const schema = new GraphQLSchema({
    query: query
});

module.exports = schema;