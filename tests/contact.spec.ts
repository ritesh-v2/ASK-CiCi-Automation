import{test,expect} from "@playwright/test"
import exp from "constants"

test.describe('This block is used for the contact form', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto("https://sdetunicorns.com/")
        
    })

    test('Validat the contact form', async ({ page }) => {

        const contactLink = page.locator('//ul[@id="menu-1-750ee2f"]//a[@href="https://sdetunicorns.com/contact-us/"]').nth(0);

        await contactLink.click();

        const ContactTitle = page.locator('[data-id="bf786a1"]');

        await expect(ContactTitle).toHaveText('Contact');
        
    })

    test('Verify the contact form elements', async ({ page }) => {

        const contactLink = page.locator('//ul[@id="menu-1-750ee2f"]//a[@href="https://sdetunicorns.com/contact-us/"]').nth(0);

        await contactLink.click();

        const nameCon = await page.locator('#form-field-name');
        await expect(nameCon).toBeEmpty();
        await expect(nameCon).toBeEditable();

        const emailCon = await page.locator('//input [@name = "form_fields[email]"]');
        await expect(emailCon).toBeEditable()
        await expect(emailCon).toBeEmpty();

        const msgForm = await page.getByPlaceholder('Message');
        await expect(msgForm).toBeEditable();
        await expect(msgForm).toBeEmpty()

        await page.waitForTimeout(10000)

        const captchaCheck = await page.locator('//*[@id="recaptcha-anchor"]')
        await captchaCheck.isVisible();
        
    })
//  //*[@class="recaptcha-checkbox-border"] Click on the this locator
//  //button[@type="submit"]  Submit button

    
})
