import { BasePage } from "./BasePage";
import { Locator } from 'playwright';

export class ConfirmationPage extends BasePage {
  public readonly programConfirmationMessage: Locator = this.page.locator(
    "//div[@class='payment-confirmation']/p/span",
  );
  public readonly emailConfirmationMessage: Locator = this.page.locator(
    "//div[@class='payment-confirmation']/p/u",
  );
  public readonly supportInfo: Locator = this.page.locator(
    "//div[@class='support']",
  );

  public async getConfirmationProgramText() {
    return await this.programConfirmationMessage.textContent();
  }
}