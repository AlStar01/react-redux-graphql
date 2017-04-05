let express = require('express');
let router = express.Router();

let contactService = require('./contacts.service');

router.get('/', (req, res) => {
    contactService.getContacts()
        .then(contacts => res.status(200).send(contacts))
        .catch(error => res.status(500).send(error));
});

module.exports = router;