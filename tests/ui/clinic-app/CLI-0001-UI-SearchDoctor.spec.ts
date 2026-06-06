import { Page, expect, test } from "@playwright/test";
import PageObjectManager from "../../../pages/PageObjectManager";
import testData from "../../../test-data/ui/clinic-app/CLI-0001-UI-TestData.json";

const TC001 = testData["TC-0001"];
const TC002 = testData["TC-0002"];

test.describe("CLI-0001: UI - Search Doctor", () => {
  let page: Page;
  let pom: PageObjectManager;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    pom = new PageObjectManager(page);
    await pom.dashboardPage.openApp();
    await pom.clinicAppPage.openClinicApp();
  });
  test(`${TC001.TestCaseID} - ${TC001.TestCaseDescription}`, async () => {
    test
      .info()
      .annotations.push(
        { type: "Test Case ID", description: TC001.TestCaseID },
        { type: "Description", description: TC001.TestCaseDescription },
        { type: "Preconditions", description: TC001.Preconditions },
        { type: "Expected Result", description: TC001.ExpectedResult },
      );
    await pom.clinicAppPage.validateHeader();
  });

  test(`${TC002.TestCaseID} - ${TC002.TestCaseDescription}`, async () => {
    test
      .info()
      .annotations.push(
        { type: "Test Case ID", description: TC001.TestCaseID },
        { type: "Description", description: TC001.TestCaseDescription },
        { type: "Preconditions", description: TC001.Preconditions },
        { type: "Expected Result", description: TC001.ExpectedResult },
      );
    await pom.clinicAppPage.navigateToSearchDoctor();
    await pom.clinicAppPage.searchDoctor(TC002.TestData.DoctorName);
    await pom.clinicAppPage.validateSearchResults(
      TC002.TestData.ExpectedDoctorName,
    );
  });
});
