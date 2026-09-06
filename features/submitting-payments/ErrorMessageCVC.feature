@sep29
Feature: Error message for the invalid CVC number

    As a user, I want to be informed when the CVC number I enter is incorrect or too short.

    #* AC1: The Immediate error message should be thrown if the CVC number is too short or wrong. "Your card's security code is incomplete."

    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page
        And user has completed start application step
        And user has completed payment plan step

    Scenario Outline: CVC error message is displayed when enterd incomplete cvc number
        When user enters "<incomplete_cvc_number>"
        And user clicks the terms and conditions checkbox
        Then user should see the error message "Your security code is incomplete."

        Examples:
            | incomplete_cvc_number |
            | 1                     |
            | 12                    |
