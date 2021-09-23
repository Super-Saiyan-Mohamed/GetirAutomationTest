const HomePage = require('../pageobjects/homePage.page');

describe('Test Case Study Suite', () => {
    it('Case 1', () => {
        browser.pause(3000);
        HomePage.passWelcomeScreen();
        HomePage.addAndDeleteProduct();
    });

    it.only('Case 2', () => {
        browser.pause(3000);
        HomePage.passWelcomeScreen();
        HomePage.openMenuAndChooseCategoryAndProduct();
    });

    afterEach(() =>{
        driver.reset();
    });
});


