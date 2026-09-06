import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup";
import { productInfo } from "../../utilities/qa-data-reader";

When("user enters the first name", async function () {
  await startApplicationPage.enterFirstName("John");
});

When("user enters the last name", async function () {
  await startApplicationPage.enterLastName("Doe");
});

When("user enters the email address", async function () {
  await startApplicationPage.enterEmail("john.doe@email.com");
});

When("user enters the phone number", async function () {
  await startApplicationPage.enterPhoneNumber("123-456-7890");
});

When("user selects how did you hear about us dropdown", async function () {
  // Default to Email for the non-parameterized scenario
  await startApplicationPage.selectHowDidYouHearAboutUs("Email");
});

When("user clicks the next button on start application step", async function () {
  await startApplicationPage.clickNextButton();
});

Then("the start application stepper circle color should be green", async function () {
  await expect(startApplicationPage.startApplicationStepCircle).toHaveCSS(
    "background-color",
    "rgb(172, 245, 138)",
  );
});

Then("the payment plan stepper circle color should be blue", async function () {
  await expect(startApplicationPage.paymentPlanStepCircle).toHaveCSS(
    "background-color",
    "rgb(1, 201, 255)",
  );
});

// Parameterized steps for the Scenario Outline
When("user enters {string} as the first name", async function (firstName) {
  await startApplicationPage.enterFirstName(firstName);
});

When("user enters {string} as the last name", async function (lastName) {
  await startApplicationPage.enterLastName(lastName);
});

When("user enters {string} as the email address", async function (email) {
  await startApplicationPage.enterEmail(email);
});

When("user enters {string} as the phone number", async function (phoneNumber) {
  await startApplicationPage.enterPhoneNumber(phoneNumber);
});

When(
  "user selects {string} from how did you hear about us dropdown",
  async function (option) {
    const value = option.toLowerCase();

    // Open dropdown first
    await startApplicationPage.howDidYouHearAboutUsDropDown.click();

    if (value.includes("email")) {
      await startApplicationPage.emailOptionFromDropDown.click();
    } else if (value.includes("facebook") || value.includes("social")) {
      await startApplicationPage.facebookOptionFromDropDown.click();
    } else if (value.includes("google")) {
      await startApplicationPage.googleOption.click();
    } else if (value.includes("instagram")) {
      await startApplicationPage.instagramOptionFromDropDown.click();
    } else if (value.includes("linkedin")) {
      await startApplicationPage.linkedInOptionFromDropDown.click();
    } else if (value.includes("twitter")) {
      await startApplicationPage.twitterOptionFromDropDown.click();
    } else if (value.includes("friend") || value.includes("referr")) {
      await startApplicationPage.referredByFriedOptionFromDropDown.click();
    } else {
      // Fallback to Other
      await startApplicationPage.otherOptionFromDropDown.click();
    }
  }
);
