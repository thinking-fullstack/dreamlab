describe('Workflow of site', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Pagination', () => {
    cy.wait(2000);
    for (let i = 0; i < 5; i++) {
      cy.get('.rc-pagination-item-link').last().click();
    }
  });

  it('Showing detailed content', () => {
    cy.wait(2000);
    cy.getByTestId('character-card').first().click();

    cy.wait(2000);
    cy.getByTestId('character-dialog').then(() => {
      cy.getByTestId('close-btn').click();
    });
  });

  it('Searching character', () => {
    cy.wait(2000);
    cy.getByTestId('search-input').type('Naboo');

    cy.getByTestId('character-card').not().eq(0);
  });
})
