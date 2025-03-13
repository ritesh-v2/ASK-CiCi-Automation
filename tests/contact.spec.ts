import{test,expect} from "@playwright/test"
import exp from "constants"
import { TIMEOUT } from "dns"

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

    test('Verify the accepting values of the contact form', async ({ page }) => {

        const contactLink = page.locator('//ul[@id="menu-1-750ee2f"]//a[@href="https://sdetunicorns.com/contact-us/"]').nth(0);

        await contactLink.click();

        const nameCon = page.locator('#form-field-name');
        const emailCon = page.locator('//input [@name = "form_fields[email]"]');
        const msgForm = page.getByPlaceholder('Message');

        await nameCon.fill('Sarvana')
        await emailCon.fill('Sarvana@gmail.com')
        await msgForm.fill('This is validation for contact form')

        await page.mouse.wheel(0, 500);

        await page.waitForTimeout(10000);

        try {
            // Wait for ad overlay and close it
            await page.locator('//*[@id="hustle-popup-id-7"]/div[2]/div/div/div[2]/div/button').click();
            console.log('Ad closed');
          } catch (error) {
            console.log('No ad found or already closed');
        }
        
       /* const adClose = await page.locator('//*[@id="hustle-popup-id-7"]/div[2]/div/div/div[2]/div/button');

        await adClose.click({timeout:30000});*/

        const captchaCh = await page.locator('//iframe[@title="reCAPTCHA"]')

        await captchaCh.click();

        await page.getByRole("button",{name:'Submit'}).click();

        await page.pause()

    })
    
})