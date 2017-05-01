let { GraphQLObjectType, GraphQLString } = require('graphql');
let { contactType } = require('./types');

let { resolveAddContact } = require('./resolvers');

const contactMutation = new GraphQLObjectType({
    new: 'RootMutationType',
    fields: {
        addContact: {
            type: contactType,
            args: {
                contact: {
                    type: contactType
                }
            },
            resolve: resolveAddContact
        }
    }
});

module.exports = contactMutation;