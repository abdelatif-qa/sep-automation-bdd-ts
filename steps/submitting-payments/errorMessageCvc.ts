import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { reviewPaymentPage, page } from "../../globalPagesSetup";
import { productInfo } from "../../utilities/qa-data-reader";

When("user enters {string}", async function (string) {
  await reviewPaymentPage.enterCVC(string);
});

When("user clicks the terms and conditions checkbox", async function () {
  await reviewPaymentPage.clickTermsAndConditionsCheckbox();
});

Then("user should see the error message {string}", async function (string) {
  await expect(reviewPaymentPage.cardCVCErrorMessage).toHaveText(string);
});
