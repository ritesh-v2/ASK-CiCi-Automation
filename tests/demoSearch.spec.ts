import {test,expect} from "@playwright/test"
import exp from "constants"

test.describe('This block is used for the demo project', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('https://www.icc-cricket.com/')
        
    })

    test('Verify the search for term, its URL and Result for search', async ({ page }) => {

        const searchButton = await page.locator('//a[@href="/search"]');

        await page.waitForTimeout(2000);

        await searchButton.click();

        await expect(page.url().toLowerCase()).toContain('https://www.icc-cricket.com/search');

        const textTerm = page.getByPlaceholder('what are you looking for?');

        await textTerm.fill('India');

        await textTerm.press('Enter');

        await page.waitForLoadState()

        const serachURL = page.url().toLowerCase()

        expect(serachURL).toContain("https://www.icc-cricket.com/search?q=india")
        
    })     
})