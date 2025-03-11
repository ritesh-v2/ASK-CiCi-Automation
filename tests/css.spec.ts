import {test,expect} from "@playwright/test"

test.describe('Test Suite', () => {

    test.beforeEach(async({page})=>{

        await page.goto('https://sdetunicorns.com/');

    });

    test('verify the contact link',async({page})=>{

        const contactLink = page.locator('//ul[@id="menu-1-750ee2f"]//a[@href="https://sdetunicorns.com/contact-us/"]').nth(0);

        await contactLink.click();

        const contactText = page.locator('//div[@data-id="bf786a1"]');

        await expect(contactText).toHaveText("Contact");

    }) 
})


