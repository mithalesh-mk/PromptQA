import { Page, expect } from "@playwright/test";

export default class ShopAppPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  //open the shop app from the dashboard
  async openShopApp() {
    await this.page.getByTestId("cta-shop").click();
  }

  //search for a product using the search input
  async searchProduct(productName: string) {
    await this.page.getByTestId("search-input").fill(productName);
  }

  //validate that the search results contain the expected product name
  async validateSearchResults(expectedProductName: string) {
    const resultsLocator = this.page.locator("h3.product-card-title");
    // Wait for the search results to be visible
    await expect(resultsLocator.first()).toBeVisible({ timeout: 5000 });
    const texts = await resultsLocator.allTextContents();

    // Use soft assertions to check if each product title contains the expected product name
    for (const text of texts) {
      expect.soft(text).toContain(expectedProductName);
    }
  }
  //validate that the no results message is displayed with the expected text
  async validateNoResultsMessage(expectedMessage: string) {
    const noResultsLocator = this.page.getByTestId("no-results");
    await expect(noResultsLocator).toBeVisible({ timeout: 5000 });
    await expect(noResultsLocator).toContainText(expectedMessage);
  }
}
