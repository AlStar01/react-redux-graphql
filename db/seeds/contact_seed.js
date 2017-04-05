let faker = require('faker');

exports.seed = function (knex, Promise) {
  let contacts = [];

  for (let i = 0; i < 100; i++) {
    let fakerContact = faker.helpers.contextualCard();

    let contact = {
      name: fakerContact.name,
      email: fakerContact.email,
      phone: fakerContact.phone,
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.stateAbbr(),
      zip: faker.address.zipCode(),
      website: fakerContact.website,
      company: fakerContact.company.name,
      title: faker.name.jobTitle(),
      avatar: fakerContact.avatar,
      birthday: faker.date.between('1950-01-01', '2000-01-01'),
      created_on: knex.fn.now(),
      modified_on: knex.fn.now()
    };

    contacts.push(contact);
  }

  // Deletes ALL existing entries
  return knex('contact').del()
    .then(function () {
      // Inserts seed entries
      return knex('contact').insert(contacts);
    });
};