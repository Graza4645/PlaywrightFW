export default class LoginPage {
  constructor(page) {
    this.page = page;
  }

  get usernameField() {
    return this.page.locator('#username');
  }

  get continueButton() {
    return this.page.locator('#continueButton');
  }

  get passwordField() {
    return this.page.locator('#password');
  }

  get loginButton() {
    return this.page.locator('#loginButton');
  }

  get profileIcon() {
    return this.page.locator("//div[@class='avatar-menu']");
  }

  get signOutButton() {
    return this.page.locator("//div[text()='Sign Out']");
  }

  async login(username, password) {
    await this.usernameField.fill(username);
    await this.continueButton.click();
    await this.passwordField.fill(password);
    await this.loginButton.click();
    await this.page.waitForTimeout(500);
  }

  async logout() {
    await this.page.waitForTimeout(1000);
    await this.profileIcon.click();
    await this.page.waitForTimeout(1000);
    await this.signOutButton.click();
    await this.page.waitForTimeout(500);
  }


}
