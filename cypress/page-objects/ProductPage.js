class ProductPage {
  // Elements
  productName() {
    return cy.get('.inventory_details_name');
  }

  // Actions
  verifyProductPage(expectedName) {
    this.productName().should('have.text', expectedName);
    cy.url().should('include', '/inventory-item.html');
  }
}

export default ProductPage;