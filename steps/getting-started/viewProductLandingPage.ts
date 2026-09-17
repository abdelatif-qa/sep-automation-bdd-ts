import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, leftMainPage, page } from "../../globalPagesSetup";
import { productInfo } from "../../utilities/qa-data-reader";

Then("the page title contains {string}", async function (titleText: string) {
  await expect(leftMainPage.secureCheckout).toBeVisible();
  await expect(leftMainPage.secureCheckout).toContainText(titleText.trim());
});

Then("the program name is displayed", async function () {
  await expect(leftMainPage.programName).toBeVisible();
  const displayedProgramName = (
    await leftMainPage.programName.textContent()
  )?.trim();
  expect(displayedProgramName).toBe(productInfo.programName);
});

Then(
  "the left footer contains the links in this order:",
  async function (dataTable) {
    const rows = dataTable.raw();

    for (let i = 0; i < rows.length; i++) {
      let element = rows[i][0];
      let actualText = await leftMainPage.footerElements.nth(i).textContent();
      expect(actualText).toBe(element);
    }
});

Then(
  "the right footer contains {string}",
    async function (expectedText: string) {
        await expect(startApplicationPage.footer).toBeVisible();
        const footerText = await startApplicationPage.footer.first().textContent();
        console.log(`Footer text: ${footerText}`);
        expect(footerText).toBe(expectedText);
  
    });

When("the page is viewed on a desktop viewport", async function () {
  await page.setViewportSize({ width: 1440, height: 900 });
});

Then("the page layout is displayed correctly on desktop", async function () {
  await expect(leftMainPage.secureCheckout).toBeVisible();
  await expect(startApplicationPage.programNameOnInfoCard).toBeVisible();
});

When("the page is viewed on a mobile viewport", async function () {
  await page.setViewportSize({ width: 390, height: 844 });
});

Then("the page layout is displayed correctly on mobile", async function () {
  await expect(leftMainPage.secureCheckout).toBeVisible();
  await expect(startApplicationPage.programNameOnInfoCard).toBeVisible();
});
