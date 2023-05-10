class CustomerFeedbackPage {
    visit() {
      cy.visit('https://juice-shop.herokuapp.com/');
      cy.get('.mat-drawer-inner-container').contains('Customer Feedback').click();
    }
      
        fillForm(name, email, feedback, rating) {
          cy.get('[data-cy="name-input"]').type(name);
          cy.get('[data-cy="email-input"]').type(email);
          cy.get('[data-cy="feedback-input"]').type(feedback);
          cy.get('[data-cy="rating-input"]').select(rating);
        }
      
        submitForm() {
          cy.get('[data-cy="submit-btn"]').click();
        }
      
        assertRequestPayloadAndResponse() {
          cy.intercept('POST', '/rest/user/feedback').as('submitFeedback');
      
          cy.wait('@submitFeedback').then((interception) => {
            const requestBody = interception.request.body;
            const responseBody = interception.response.body;
      
            // Assert request payload
            expect(requestBody).to.have.property('name');
            expect(requestBody).to.have.property('email');
            expect(requestBody).to.have.property('comment');
            expect(requestBody).to.have.property('rating');
      
            // Assert response
            expect(responseBody).to.have.property('status', 'success');
          });
        }
      }
      
      export default CustomerFeedbackPage;
      