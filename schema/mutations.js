let { GraphQLObjectType } = require('graphql');
let { contactType, contactInputType } = require('./types');

let contactResolvers = require('./resolvers');

const contactMutation = new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
        addContact: {
            type: contactType,
            description: 'Add new contact',
            args: {
                contact: { type: contactInputType }
            }, 
            resolve: contactResolvers.resolveAddContact
        }
    }
});

module.exports = contactMutation;