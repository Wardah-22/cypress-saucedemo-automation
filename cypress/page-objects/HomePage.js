class HomePage {
  // Elements
  appLogo() {
    return cy.get('.app_logo');
  }

  productItem(name) {
    return cy.contains('.inventory_item_name', name);
  }

  // Actions
  verifyHomePage() {
    this.appLogo().should('be.visible');
    cy.url().should('include', '/inventory.html');
  }

  clickProduct(productName) {
    this.productItem(productName).click();
  }
}

export default HomePage;