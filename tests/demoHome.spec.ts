import {test, expect} from "@playwright/test"
import exp from "constants"

test.describe('This block is used for the demo project', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('https://www.icc-cricket.com/')
        
    })

    test('Verify the URL of the page consist of Current campaign', async ({ page }) => {

        const curCamp = await page.url().toLowerCase()

        await expect(curCamp).toContain('icc-cricket');
    
    })

    test('Verify the title for home page',async ({ page }) => {

        const titleFirst = await page.title();
        await expect(titleFirst).toContain('Official International Cricket Council Website');
    
    })

    test('Verify the logo of the website ', async ({ page }) => {

       await expect(page.getByAltText('Header Logo')).toBeVisible();
        
    })
    // test('Verify the menu links in the header section of home page', async ({ page }) => {

    //     const menuLink = await page.locator('#primaryNavigation__i9x0aUyv9c_CsVXO5FBi a')

    //         const text = await links.length()

    //         console.log(text)
    //     })
        
})