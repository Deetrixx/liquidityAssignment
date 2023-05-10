import CustomerFeedbackPage from '../page_objects/customerFeedbackPage';

describe('Customer Feedback', () => {
  const customerFeedbackPage = new CustomerFeedbackPage();

  beforeEach(() => {
    cy.visit('https://juice-shop.herokuapp.com/');
    cy.contains('Customer Feedback').click();
    cy.url().should('include', '/#/contact');
  });

  it('should test form inputs and validations', () => {
    customerFeedbackPage.fillName('Dennis Test');
    customerFeedbackPage.fillEmail('denntest@mail.com');
    customerFeedbackPage.fillSubject('Test Subject');
    customerFeedbackPage.fillMessage('Test Message');
    customerFeedbackPage.selectRating('5');
    customerFeedbackPage.checkTermsAndConditions();

    // Assertions for form validations
    cy.get('#name').should('have.value', 'Dennis Test');
    cy.get('#email').should('have.value', 'dennistest@mail.com');
    cy.get('#subject').should('have.value', 'Test Subject');
    cy.get('#message').should('have.value', 'Test Message');
    cy.get('[data-cy="rating"]').should('have.value', '5');
    cy.get('[data-cy="terms"]').should('be.checked');
  });

  it('should test form request payload and response', () => {
    customerFeedbackPage.fillName('Dennis Test');
    customerFeedbackPage.fillEmail('dennistest@mail.com');
    customerFeedbackPage.fillSubject('Test Subject');
    customerFeedbackPage.fillMessage('Test Message');
    customerFeedbackPage.selectRating('5');
    customerFeedbackPage.checkTermsAndConditions();
    customerFeedbackPage.submitForm();

    // Assertions for request payload and response
    cy.intercept('POST', '/api/Feedbacks').as('submitFormRequest');
    cy.wait('@submitFormRequest').then((interception) => {
      const { request, response } = interception;
      
      expect(request.body.name).to.equal('Dennis Test');
      expect(request.body.email).to.equal('dennistest@mail.com');
      expect(request.body.subject).to.equal('Test Subject');
      expect(request.body.message).to.equal('Test Message');
      expect(request.body.rating).to.equal('5');
      expect(request.body.termsAndConditions).to.be.true;

      expect(response.statusCode).to.equal(200);
    });
  });
});

