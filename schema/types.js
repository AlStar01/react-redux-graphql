let {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql');

const contactType = new GraphQLObjectType({
  name: 'Contact',
  description: 'a business contact',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLInt),
      description: 'a business contact\'s id',
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'a business contact\'s name',
    }  
  })
});

module.exports = contactType;