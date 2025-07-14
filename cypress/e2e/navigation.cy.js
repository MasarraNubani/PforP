// cypress/e2e/navigation.cy.js

describe('Navigation', () => {
    beforeEach(() => {
      cy.visit('http://localhost:1234');
    });
  
    it('Navigates to Home', () => {
      cy.get('[id="homePage"]').click();
      cy.contains('Study Night'); 
    });
  
    it('Navigates to About', () => {
      cy.get('[id="aboutPage"]').click();
      cy.contains('About'); 
    });
  
    it('Navigates to Card Sets', () => {
      cy.get('[id="cardSetPage"]').click();
      cy.contains('Card Sets');
    });
  });
  