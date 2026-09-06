@sep19
Feature: Click on the next button on step 1

    As a customer, I should be able to click on the next button on step 1 when I give valid information.

    #* AC1: The next button should take customers to step 2 when given valid information.
    #*              a. Test by providing all fields
    #*              b. Test by providing only the required fields
    
    #TODO: Create scenarios that cover all the acceptance criteria
    Background:
        Given user is on the enrollment page

    Scenario: verify that clicking next button after providing all fields takes the user to payment plan step
        When user enters the first name
        And user enters the last name
        And user enters the email address
        And user enters the phone number
        And user selects how did you hear about us dropdown
        And user clicks the next button on start application step
        Then the start application stepper circle color should be green
        And the payment plan stepper circle color should be blue


    Scenario: verify that clicking next button after providing only the required fields takes the user to payment plan step
        When user enters the first name
        And user enters the last name
        And user enters the email address
        And user enters the phone number
        And user clicks the next button on start application step
        Then the start application stepper circle color should be green
        And the payment plan stepper circle color should be blue

    Scenario Outline: verify that clicking next button after providing all fields takes the user to payment plan step
        When user enters "<first_name>" as the first name
        And user enters "<last_name>" as the last name
        And user enters "<email_address>" as the email address
        And user enters "<phone_number>" as the phone number
        And user selects "<how_did_you_hear_about_us>" from how did you hear about us dropdown
        And user clicks the next button on start application step
        Then the start application stepper circle color should be green
        And the payment plan stepper circle color should be blue

        Examples:
            | first_name | last_name | email_address           | phone_number | how_did_you_hear_about_us |
            | John       | Doe       | john.doe@email.com      | 123-456-7890 | Friend                    |
            | Jane       | Smith     | jane.smith@email.com    | 098-765-4321 | Social Media              |
            | Alice      | Johnson   | alice.johnson@email.com | 555-555-5555 | Advertisement             |
            | Bob        | Brown     | bob.brown@email.com     | 111-111-1111 | Other                     |
            | Muhtar     | Ahmed     | muhtar.ahmed@email.com  | 222-222-2222 | referral                  |
