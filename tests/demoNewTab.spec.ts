import {expect, test} from "@playwright/test"

test.describe('Verify the new tab or new page', () => {

    test.beforeEach(async ({ page }) => {
        
        await page.goto('https://www.icc-cricket.com/')

    })

    test('Verify the new page is open for the advertise', async ({ page }) => {
        
       const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator('//img[@alt="star-sports-on-dark-background"]').click()

        ])//newpage is open here

        //Wait for the new page to load

        await newPage.waitForLoadState();

        await expect(newPage).toHaveTitle('JioHotstar - Watch TV Shows, Movies, Specials, Live Cricket & Football');

        try {
            await page.getByTestId('modal-close-button')
        } catch (error) {
            
        }

        const hotstarUrl = newPage.url().toLowerCase();

        expect(hotstarUrl).toContain('https://www.hotstar.com/in/home');

        await newPage.close()
    })

})
