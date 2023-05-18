import faker from 'faker';

describe('Create 10 user contacts', () => {
  const baseUrl = 'https://thinking-tester-contact-list.herokuapp.com'
  const contactsEndpoint = '/contacts'
  it('should create 10 user contacts', function () {

    const numberOfContactsToCreate = 10

    for (let i = 0; i < numberOfContactsToCreate; i++) {
      const firstName = faker.name.firstName().toLowerCase();
      const contact = {
        firstName: firstName,
        lastName: faker.name.lastName(),
        birthdate: '1970-01-01',
        email: faker.internet.email(firstName, '', 'testmail.com').toLowerCase(),
        phone: '8005555555',
        street1: '1 Main St.',
        street2: 'Apartment A',
        city: 'Anytown',
        stateProvince: 'KS',
        postalCode: '12345',
        country: 'USA'
      }

      cy.request({
        method: 'POST',
        url: baseUrl + contactsEndpoint,
        headers: {
          'Authorization': 'Bearer accessToken',
          'X-Fake-Header': 'dummy'
        },
        body: contact
      }).then((response) => {
        expect(response.status).to.equal(201)
        expect(response.body).include(contact)
      })
    }
  })
})