import LoginPage from '../page-objects/LoginPage';
import HomePage from '../page-objects/HomePage';
import ProductPage from '../page-objects/ProductPage';

const loginPage = new LoginPage();
const homePage = new HomePage();
const productPage = new ProductPage();

describe('Sauce Demo Automation Test Suite', () => {
  beforeEach(() => {
    // Navigate to the login page before each test
    cy.visit('https://www.saucedemo.com');
  });

  // 1. Attempt a wrong login and verify error message
  it('should display an error message for invalid login credentials', () => {
    // Use the page object methods to interact with elements
    loginPage.typeUsername('wrong_user');
    loginPage.typePassword('wrong_password');
    loginPage.clickLogin();

    // Verify the error message
    loginPage.errorMessage().should('be.visible');
    loginPage.errorMessage().should('contain', 'Epic sadface: Username and password do not match any user in this service');
  });

  // 2. Login into app and verify user is landed on home page
  it('should successfully login and land on the home page', () => {
    // Use the custom command for login
    cy.login('standard_user', 'secret_sauce');
    
    // Verify user is on the home page using POM method
    homePage.verifyHomePage();
  });

  // 3. Click on product and verify that the browser is landing on the product page
  it('should navigate to the product page after clicking on a product', () => {
    const productName = 'Sauce Labs Backpack';

    // Use the custom command for login
    cy.login('standard_user', 'secret_sauce');
    
    // Click on the specific product using POM method
    homePage.clickProduct(productName);
    
    // Verify that the browser is on the product page using POM method
    productPage.verifyProductPage(productName);
  });
});