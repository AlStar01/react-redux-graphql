let {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt
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
    }, 
    email: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'a business contact\'s email address',
    },  
    phone: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'a business contact\'s phone number',
    },  
    street: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'a business contact\'s street',
    },  
    city: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'a business contact\'s city',
    },  
    state: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'a business contact\'s state',
    },  
    zip: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'a business contact\'s zip',
    },  
    website: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'a business contact\'s website',
    },  
    company: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'a business contact\'s company',
    },  
    title: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'a business contact\'s job title',
    },  
    avatar: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'a business contact\'s avatar image url',
    },  
    birthday: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'a business contact\'s birthday',
    },  
    created_on: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Date business contact was created on',
    },  
    modified_on: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'Date business contact was modified on',
    },  
  })
});

module.exports = contactType;