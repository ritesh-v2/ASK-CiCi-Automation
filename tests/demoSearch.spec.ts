import {test,expect} from "@playwright/test"
import exp from "constants"

test.describe('This block is used for the demo project', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('https://www.icc-cricket.com/')
        
    })

    test('Verify the search for term, its URL and Result for search', async ({ page }) => {

        const searchButton = await page.locator('//a[@href="/search"]');

        await searchButton.click();

        expect(page.url().toLowerCase()).toContain('https://www.icc-cricket.com/search');

        const textTerm = await page.getByPlaceholder('what are you looking for?');

        await textTerm.fill('India');

        await textTerm.press('Enter');

        const serachURL = await page.url().toLowerCase()

        expect(serachURL).toContain("https://www.icc-cricket.com/search?q=india")

    })     
})