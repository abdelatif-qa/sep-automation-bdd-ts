@sep07
Feature: View Product Landing Page

    As a customer, I should be able to see the product landing page.

    #* AC1: The system displays the text "Cydeo Secure Checkout".
    #* AC2: The system should display the program name.
    #* AC3: Users should see a footer on the left side of the page that includes by order: 
    #*      logo, Terms and Conditions, Privacy Policy, Disclaimer, Cookie Policy
    #* AC4: The system displays "Need help? Contact us at enrollment@cydeo.com" in the footer on the right.
    #* AC5: The system should be compatible with both desktop and mobile devices.    

    #TODO: Create scenarios that cover all the acceptance criteria

    Background:
        Given user is on the enrollment page

    @sep07-1
    Scenario: Display the secure checkout header text
        Then the page title contains "Secure checkout"

    @sep07-2
    Scenario: Display the program name on the landing page
        Then the program name is displayed

    @sep07-3
    Scenario: Display the footer links in the expected order on the left side
        Then the left footer contains the links in this order:
            | Terms and conditions |
            | Privacy Policy       |
            | Disclaimer           |
            | Cookie Policy        |

    @sep07-4
    Scenario: Display the help contact information in the footer on the right
        Then the right footer contains "Need help? Contact us at enrollment@cydeo.com"

    @sep07-5
    Scenario: Display the landing page responsively on desktop and mobile
        When the page is viewed on a desktop viewport
        Then the page layout is displayed correctly on desktop
        When the page is viewed on a mobile viewport
        Then the page layout is displayed correctly on mobile

    