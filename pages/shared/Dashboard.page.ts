import { Page, expect } from "@playwright/test";

export default class DashboardPage {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async openApp() {
    await this.page.goto("/");
    await expect(this.page).toHaveTitle(/PromptQA Playground/);
    await this.page.getByRole("button", { name: "Skip tour" }).click();
  }

  async login(userName: string, password: string) {
    await this.openApp();
    await this.page.getByTestId("nav-login").click();
    await this.page.getByTestId("login-email").fill(userName);
    await this.page.getByTestId("login-password").fill(password);
    await this.page.getByTestId("login-submit").click();
    await expect(this.page).toHaveTitle(/PromptQA Playground/);
  }

  async logout() {
    await this.page.getByTestId("logout-btn").click();
  }
}
