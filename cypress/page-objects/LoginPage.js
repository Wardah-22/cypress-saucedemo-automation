class LoginPage {
  // Elements
  usernameInput() {
    return cy.get('#user-name');
  }

  passwordInput() {
    return cy.get('#password');
  }

  loginButton() {
    return cy.get('#login-button');
  }

  errorMessage() {
    return cy.get('[data-test="error"]');
  }

  // Actions
  typeUsername(username) {
    this.usernameInput().type(username);
  }

  typePassword(password) {
    this.passwordInput().type(password);
  }

  clickLogin() {
    this.loginButton().click();
  }
}

export default LoginPage;