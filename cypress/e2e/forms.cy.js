// cypress/e2e/forms.cy.js

describe('Forms Functionality', () => {
    beforeEach(() => {
      cy.visit('http://localhost:1234');
      cy.get('[id="cardSetPage"]').click(); 
    });
  
    it('Successfully creates a new set with valid input', () => {
      cy.get('[data-cy="create-set-input"]').type('My New Set');
      cy.get('[data-cy="create-set-submit"]').click();
      cy.contains('My New Set'); 
    });
  
    it('Shows error on empty input', () => {
      cy.get('[data-cy="create-set-input"]').clear();
      cy.get('[data-cy="create-set-submit"]').click();
      cy.contains('Error'); 
    });
  
    it('Successfully adds a card with valid input', () => {
      cy.get('[data-cy="add-card-term"]').type('Term 1');
      cy.get('[data-cy="add-card-desc"]').type('Description 1');
      cy.get('[data-cy="add-card-submit"]').click();
      cy.contains('Term 1');
      cy.contains('Description 1');
    });
  
    it('Shows error on adding card with empty input', () => {
      cy.get('[data-cy="add-card-term"]').clear();
      cy.get('[data-cy="add-card-desc"]').clear();
      cy.get('[data-cy="add-card-submit"]').click();
      cy.contains('Error');
    });
  });
  