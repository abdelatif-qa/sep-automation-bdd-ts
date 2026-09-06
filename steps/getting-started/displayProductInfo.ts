import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, leftMainPage, page } from "../../globalPagesSetup";
import { productInfo } from "../../utilities/qa-data-reader";

Then('the product name should be displayed on the information card', async function () {
  await expect(startApplicationPage.programNameOnInfoCard).toBeVisible();
});

Then('the product name should match the product name on the left side of the screen', async function () {
  const cardProductName = (await startApplicationPage.programNameOnInfoCard.innerText()).trim();
  const leftSideProductName = (await leftMainPage.programName.innerText()).trim();

  expect(cardProductName).toBe(leftSideProductName);
});

Then('the product price should be displayed', async function () {
  await expect(startApplicationPage.programPrice).toBeVisible();
});

Then('the text indicating a flexible payment plan should be available is displayed', async function () {
  await expect(startApplicationPage.flexiblePaymentsPlanAvailableText).toBeVisible();
});

Then('the program start date is displayed', async function () {
  await expect(startApplicationPage.programStartDate).toBeVisible();
});

Then('the refund policy is displayed', async function () {
  await expect(startApplicationPage.flexiblePaymentsPlanAvailableText).toBeVisible();
});

Then('the final date for refunds is displayed', async function () {
  await expect(startApplicationPage.refundEndDate).toBeVisible();
});
