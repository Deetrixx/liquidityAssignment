Feature: Customer Feedback Form
  As a user
  I want to provide feedback on the website
  So that I can share my thoughts and experiences

  Background:
    Given I am on the Juice Shop website

  Scenario: Fill and submit the feedback form
    When I navigate to the 'Customer Feedback' page
    And I fill the form with the following details:
      | Name       | Email            | Feedback                  | Rating |
      | Dennis Test   | denntest@mail.com | This is a test feedback   | 5      |
    And I submit the form
    Then I should see a success message
    And the feedback should be successfully submitted

