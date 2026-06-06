import { Page } from "@playwright/test";
import ShopAppPage from "./shop-app/ShopApp.page";
import DashboardPage from "./shared/Dashboard.page";
import ClinicAppPage from "./clinic-app/ClinicApp.page";

export default class PageObjectManager {
  readonly shopAppPage: ShopAppPage;
  readonly dashboardPage: DashboardPage;
  readonly clinicAppPage: ClinicAppPage;
  constructor(page: Page) {
    this.shopAppPage = new ShopAppPage(page);
    this.clinicAppPage = new ClinicAppPage(page);
    this.dashboardPage = new DashboardPage(page);
  }
}
