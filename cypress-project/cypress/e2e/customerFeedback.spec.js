import CustomerFeedbackPage from '/Users/dennisqa/Desktop/My Docs/TechAssingment/cypress-project/cypress/page_object/customerFeedbackPage.po.js';

describe('Customer Feedback Form Tests', () => {
  const customerFeedbackPage = new CustomerFeedbackPage();

  beforeEach(() => {
    customerFeedbackPage.visit();
  });

  it('should validate and submit the form', () => {
    cy.wrap(customerFeedbackPage)
      .invoke('navigateToCustomerFeedbackPage')
      .then(() => {
        cy.wrap(customerFeedbackPage)
          .invoke('fillForm', 'Dennis Test', 'denntest@mail.com', 'This is a test feedback', '5')
          .then(() => {
            cy.wrap(customerFeedbackPage)
              .invoke('submitForm')
              .then(() => {
                cy.wrap(customerFeedbackPage)
                  .invoke('assertRequestPayloadAndResponse');
              });
          });
      });
  });
});
