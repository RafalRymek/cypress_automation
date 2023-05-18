let listLength;

describe('Delete contact test suite', () => {
  const email = userEmail
  const password = userPassword
  const baseUrl = 'https://thinking-tester-contact-list.herokuapp.com/'

  it('Logs in and delete first contact from the list', () => {
    cy.visit(baseUrl)
    cy.get('input[id="email"]').type(email)
    cy.get('input[id="password"]').type(password)
    cy.contains('Submit').click()
    cy.title().should('eq', 'My Contacts')
    cy.get('.contactTable').find('tr').then(($rows) => {
      const listLength = $rows.length
    cy.get('.contactTableBodyRow').first().click()
    cy.contains('Delete Contact').click()
    cy.title().should('eq', 'My Contacts')
    cy.get('.contactTable').find('tr').should('have.length', listLength > 0 ? listLength - 1 : 0)

  it('Delete 6th contact row', () => {
    cy.visit(baseUrl)
    cy.get('input[id="email"]').type(email)
    cy.get('input[id="password"]').type(password)
    cy.contains('Submit').click()
    cy.title().should('eq', 'My Contacts')
    cy.get('.contactTable').find('tr').then(($rows) => {
      const listLength = $rows.length
    cy.get('.contactTable').find('tr').eq(5).then((row) => {
      const rowText = row.text();
      row.remove();
    cy.get('.contactTable').find('tr').should('have.length', listLength > 0 ? listLength - 1 : 0)
    cy.get('table').find('tr').should('not.contain', rowText); 
  }
  )
  })
})
})
  })})