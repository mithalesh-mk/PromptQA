import { Page } from "@playwright/test";

export default class ClinicAppPage {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async openClinicApp() {
    await this.page.getByTestId("cta-clinic").click();
  }

  //validate that the clinic app header is visible and contains the text "MediBook"
  async validateHeader() {
    await this.page
      .locator("span", { hasText: "MediBook" })
      .first()
      .isVisible({ timeout: 5000 });
  }

  async navigateToSearchDoctor() {
    await this.page.getByTestId("clinic-cta-find").click();
  }
  async searchDoctor(doctorName: string) {
    await this.page.getByTestId("clinic-search-input").fill(doctorName);
  }
  async validateSearchResults(doctorName: string) {
    const doctorNames = this.page.locator("h3.clinic-doctor-row-name");
    await doctorNames.first().waitFor({ state: "visible" });
    const count = await doctorNames.count();
    let found = false;
    for (let i = 0; i < count; i++) {
      const name = await doctorNames.nth(i).innerText();
      if (name.includes(doctorName)) {
        found = true;
        break;
      }
    }
    if (!found) {
      throw new Error(
        `Doctor with name ${doctorName} not found in search results`,
      );
    }
  }
  async searchClinic(clinicName: string) {
    await this.page.getByTestId("search-input").fill(clinicName);
  }
}
