let { GraphQLSchema } = require('graphql');
let Query = require('./query');
let Mutation = require('./mutations');

const schema = new GraphQLSchema({
    query: Query,
    mutation: Mutation
});

module.exports = schema;