import { test, expect, Page } from "@playwright/test";
import PageObjectManager from "../../../pages/PageObjectManager";
import testData from "../../../test-data/ui/shop-app/SHOP-0001-UI-TestData.json";

const validSearch = testData["TC-0001"];
const invalidSearch = testData["TC-0002"];

test.describe("SHOP-0001: UI - Search Products", () => {
  let page: Page;

  let pom: PageObjectManager;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    pom = new PageObjectManager(page);
    await pom.dashboardPage.openApp();
  });

  test(`${validSearch.TestCaseID} - ${validSearch.TestDescription}`, async () => {
    test
      .info()
      .annotations.push(
        { type: "Module", description: validSearch.Module },
        { type: "Test Case ID", description: validSearch.TestCaseID },
        { type: "Description", description: validSearch.TestDescription },
        { type: "Preconditions", description: validSearch.Preconditions },
        { type: "Expected Result", description: validSearch.ExpectedResult },
      );
    await pom.shopAppPage.openShopApp();
    await page.waitForTimeout(2000); // Wait for the shop app to load
    await pom.shopAppPage.searchProduct(validSearch.TestData.SearchTerm);
    await pom.shopAppPage.validateSearchResults(
      validSearch.TestData.ExpectedProductName,
    );
  });

  test(`${invalidSearch.TestCaseID} - ${invalidSearch.TestDescription}`, async () => {
    test
      .info()
      .annotations.push(
        { type: "Module", description: invalidSearch.Module },
        { type: "Test Case ID", description: invalidSearch.TestCaseID },
        { type: "Description", description: invalidSearch.TestDescription },
        { type: "Preconditions", description: invalidSearch.Preconditions },
        { type: "Expected Result", description: invalidSearch.ExpectedResult },
      );
    await pom.shopAppPage.openShopApp();
    await page.waitForTimeout(2000); // Wait for the shop app to load
    await pom.shopAppPage.searchProduct(invalidSearch.TestData.SearchTerm);
    await pom.shopAppPage.validateNoResultsMessage(
      invalidSearch.TestData.ExpectedMessage,
    );
  });

  test.afterEach(async () => {
    await page.close();
  });
});
