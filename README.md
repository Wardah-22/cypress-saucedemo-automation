# 🚀 Cypress E2E Testing Project – SauceDemo.com

This project is developed as part of **Assignment** to demonstrate End-to-End Testing using **Cypress**. It includes automation tests for the [SauceDemo](https://www.saucedemo.com) web application.

---


---

## ✅ Assignment Requirements Covered

- ✅ Created Cypress project
- ✅ Automated navigation to [https://www.saucedemo.com](https://www.saucedemo.com)
- ✅ Attempted **invalid login** and verified the **error message**
- ✅ Performed **valid login** and verified landing on **home page**
- ✅ Clicked on a **product** and verified redirection to the **product detail page**
- ✅ Created **Custom Commands** for reusable test steps (e.g. login)
- ✅ Implemented **Page Object Model (POM)** for each page
- ✅**Additional Learning: ** generate report of test execution using mochawesome

---

## 🧪 Test Scenarios

### 🔒 Invalid Login Test
- Go to login page
- Enter incorrect credentials
- Verify the error message appears: `Epic sadface: Username and password do not match`

### 🔓 Valid Login Test
- Enter valid credentials: `standard_user / secret_sauce`
- Verify user lands on the **Inventory/Home page**

### 📦 Product Navigation Test
- Click on the first product
- Verify that the product detail page is shown

---

## 🧰 Tech Stack

- ✅ Cypress (E2E Testing)
- ✅ JavaScript (ES6)
- ✅ Page Object Model (POM)
- ✅ Custom Cypress Commands

---



