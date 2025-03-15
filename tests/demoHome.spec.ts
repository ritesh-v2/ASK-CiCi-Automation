import {test, expect} from "@playwright/test"
import exp from "constants"

test.describe('This block is used for the demo project', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('https://www.icc-cricket.com/')
        
    })

    test('Verify the URL of the page consist of Current campaign', async ({ page }) => {

        const curCamp = await page.url();

        await expect(curCamp).toContain('icc-cricket');
    
    })

    test('Verify the title for home page',async ({ page }) => {

        const titleFirst = await page.title();
        await expect(titleFirst).toContain('Official International Cricket Council Website');
    
    })

    test('Verify the logo of the website ', async ({ page }) => {

       await expect(page.getByAltText('Header Logo')).toBeVisible();
        
    })

    test('Verify the search for term, its URL and Result for search', async ({ page }) => {

        const searchButton = await page.locator('//a[@href="/search"]');

        await searchButton.click();

        await expect(page.url()).toContain('https://www.icc-cricket.com/search');

        const textTerm = await page.getByPlaceholder('what are you looking for?');

        await textTerm.fill('India');

        await textTerm.press('Enter');

        await expect(page.url).toContain('https://www.icc-cricket.com/search?q=india');

    })

    // test('Verify the menu links in the header section of home page', async ({ page }) => {

    //     const menuLink = await page.locator('#primaryNavigation__i9x0aUyv9c_CsVXO5FBi a')

    //         const text = await links.length()

    //         console.log(text)
    //     })
        
})