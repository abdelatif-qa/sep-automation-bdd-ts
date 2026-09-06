import { Given, Then, When } from "@cucumber/cucumber";
import { expect} from "@playwright/test";
import { startApplicationPage, page } from "../../globalPagesSetup";
import { productInfo } from "../../utilities/qa-data-reader";

    Then("the Start Application step should be highlighted in blue", async function () {
        await expect(startApplicationPage.startApplicationText).toHaveCSS("color", "rgb(6, 5, 51)");
    });
       
    Then('the checkout stepper should display the steps {string}, {string}, and {string}', async function (string, string2, string3) {
        await expect(startApplicationPage.startApplicationText).toHaveText(string);
        await expect(startApplicationPage.paymentPlanText).toHaveText(string2);
        await expect(startApplicationPage.reviewText).toHaveText(string3);
    });

    Then("the {string} step should be displayed in grey", async function (stepName: string) {
        
        const expectedColor = "rgb(130, 154, 177)";

        if (stepName === "Payment Plan") {
          await expect(startApplicationPage.paymentPlanText).toHaveCSS("color", expectedColor);
          return;
        }

        if (stepName === "Review") {
          await expect(startApplicationPage.reviewText).toHaveCSS("color", expectedColor);
          return;
        }

        throw new Error(`Unexpected grey step: ${stepName}`);
      },
    );
