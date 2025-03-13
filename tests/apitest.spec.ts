import {test,expect, APIRequestContext, APIResponse} from "@playwright/test"

test.describe('API test', () => {

    let fakerAPI : APIRequestContext;
    let randomPersonn : APIResponse;

    test.beforeAll(async ({ playwright }) => {

        fakerAPI = await playwright.request.newContext({
            baseURL : 'https://jsonplaceholder.typicode.com/'
        })

        const response = await fakerAPI.get('users');

        const responseBody = await response.json();

        randomPersonn =responseBody[0];

    })
    
    test('Verify the api is able to submit the API data in UI', async ({ page }) => {

        await page.goto('https://sdetunicorns.com/');

        const contactLink = page.locator('//ul[@id="menu-1-750ee2f"]//a[@href="https://sdetunicorns.com/contact-us/"]').nth(0);

        await contactLink.click();

        const nameCon = page.locator('#form-field-name');
        const emailCon = page.locator('//input [@name = "form_fields[email]"]');
        const msgForm = page.getByPlaceholder('Message');

        await nameCon.fill(randomPersonn['name'])
        await emailCon.fill(randomPersonn['email'])
        await msgForm.fill(randomPersonn['website'])

        await page.mouse.wheel(0, 500);

        await page.waitForTimeout(10000);

        try {
            // Wait for ad overlay and close it
            await page.locator('//*[@id="hustle-popup-id-7"]/div[2]/div/div/div[2]/div/button').click();
            console.log('Ad closed');
          } catch (error) {
            console.log('No ad found or already closed');
        }

        const captchaCh = await page.locator('//iframe[@title="reCAPTCHA"]')

        await captchaCh.click();

        await page.getByRole("button",{name:'Submit'}).click();
        
    })
    
    
})
