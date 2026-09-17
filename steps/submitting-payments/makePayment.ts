import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, reviewPaymentPage, confirmationPage, page } from "../../globalPagesSetup";
import { productInfo } from "../../utilities/qa-data-reader";

When("user enters valid card information", async function () {
    await reviewPaymentPage.waitForProgressBarToDisappear();
    await reviewPaymentPage.enterCardNumber();
    await reviewPaymentPage.enterExpiryDate();
    await reviewPaymentPage.enterCVC();
    await reviewPaymentPage.enterZipCode();
});

When("user checks the terms and conditions checkbox", async function () {
    await reviewPaymentPage.clickTermsAndConditionsCheckbox();
});

When("user clicks on the Pay button", async function () {
    await reviewPaymentPage.clickPayButton();
    await reviewPaymentPage.waitForProgressBarToDisappear();
});

Then("user should be redirected to the confirmation page", async function () { 
 
});
    
Then("the steppers should be green", async function () {
    await expect(startApplicationPage.startApplicationStepCircle).toHaveCSS(
      "background-color",
      "rgb(172, 245, 138)",
    );
    await expect(startApplicationPage.paymentPlanStepCircle).toHaveCSS(
      "background-color",
      "rgb(172, 245, 138)",
    );
    await expect(startApplicationPage.reviewStepCircle).toHaveCSS(
      "background-color",
      "rgb(172, 245, 138)",
    ); 
});

Then("the correct program name should be displayed", async function () {
    expect(await confirmationPage.getConfirmationProgramText()).toBe(productInfo.programName);  
});

Then("the correct user email should be displayed", async function () {
    await expect(confirmationPage.emailConfirmationMessage).toBeVisible();
});

Then("the correct company contact information should be displayed", async function () {
    await expect(confirmationPage.supportInfo).toBeVisible();
});
