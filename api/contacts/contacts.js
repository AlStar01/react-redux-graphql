let express = require('express');
let router = express.Router();

let contactService = require('./contacts.service');

router.get('/', (req, res) => {
    contactService.getContacts()
        .then(contacts => res.status(200).send(contacts))
        .catch(error => res.status(500).send(error));
});

router.get('/:contactId', (req, res) => {
    contactService.getContact(req.params.contactId)
        .then(contact => res.status(200).send(contact))
        .catch(error => res.status(500).send(error));
});

router.post('/', (req, res) => {
    contactService.addContact(req.body)
        .then(contact => res.status(201).send(contact))
        .catch(error => res.status(500).send(error));
});

router.patch('/:contactId', (req, res) => {
    contactService.updateContact(req.body)
        .then(contact => res.status(200).send(contact))
        .catch(error => res.status(500).send(error));
});

module.exports = router;