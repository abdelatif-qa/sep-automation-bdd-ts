@sep08
Feature: Display the steps of the checkout process

    As a customer, I should be able to know where I am in the checkout process using the stepper.

    #* AC1: The system should display the steps of the checkout process as "1-Start Application", "2-Payment Plan", and "3-Review".
    #* AC2: The system should highlight "Start Application" in blue.
    #* AC3: The system should display "Payment Plan" and "Review" in grey.

    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page

    Scenario: Verify the checkout stepper displays all steps in order
        Then the checkout stepper should display the steps "Start Application", "Payment plan", and "Review"

    Scenario: Verify the current step is highlighted in blue
        Then the Start Application step should be highlighted in blue

    Scenario: Verify the remaining steps are displayed in grey
        Then the "Payment Plan" step should be displayed in grey
        And the "Review" step should be displayed in grey
