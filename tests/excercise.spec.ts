import {test,expect} from "@playwright/test"

test.describe('Exercise ', () => {
    
    test.beforeEach(async ({page}) => {

        await page.goto('https://sdetunicorns.com/')
        
    })

    test('Verify the contact page with form ', async ({ page }) => {

        const contactLink = page.locator('//ul[@id="menu-1-750ee2f"]//a[@href="https://sdetunicorns.com/contact-us/"]').nth(0);

        await contactLink.click();

        const ContactTitle = page.locator('text="Contact Us | SDET Unicorns"').nth[0];

        await expect(ContactTitle).toHaveTitle("Contact Us | SDET Unicorns");//verify title
        
        console.log('Changes Done')
        
    })
    
})
