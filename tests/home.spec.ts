import{test,expect} from "@playwright/test";

test.describe('Home', () => {

    //This will run before all the test cases only one time
test.beforeEach(async({page})=>{
        await page.goto('https://practice.sdetunicorns.com/');
    });
test('Open home page and verify the title', async ({ page }) =>{
        //Open the URl then validate the Title
        await page.goto('https://practice.sdetunicorns.com/');
        //Verify title
        await expect(page).toHaveTitle("Practice E-Commerce Site – SDET Unicorns");
    });

test('Open Shop page and Verify the title page', async ({ page }) => {
    //Click on the shop button to navigate
    
    const shoplink = page.locator("//li[@id='menu-item-567']//a[@href='https://practice.sdetunicorns.com/shop/']")

    await shoplink.click()

    await expect(page).toHaveTitle('Shop – Practice E-Commerce Site')
    });
});


