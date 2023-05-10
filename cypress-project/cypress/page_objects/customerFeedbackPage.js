class CustomerFeedbackPage {
    fillName(value) {
      cy.get('#name').type(value);
    }
  
    fillEmail(value) {
      cy.get('#email').type(value);
    }
  
    fillSubject(value) {
      cy.get('#subject').type(value);
    }
  
    fillMessage(value) {
      cy.get('#message').type(value);
    }
  
    selectRating(value) {
      cy.get('[data-cy="rating"]').select(value);
    }
  
    checkTermsAndConditions() {
      cy.get('[data-cy="terms"]').check();
    }
  
    uncheckTermsAndConditions() {
      cy.get('[data-cy="terms"]').uncheck();
    }
  
    submitForm() {
      cy.get('[type="submit"]').click();
    }
  }
  
  export default CustomerFeedbackPage;
  
  