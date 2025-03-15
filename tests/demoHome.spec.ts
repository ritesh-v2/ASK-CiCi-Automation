import {test, expect} from "@playwright/test"
import exp from "constants"

test.describe('This block is used for the demo project', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('https://www.icc-cricket.com/tournaments/champions-trophy-2025')
        
    })

    // test('Verify the URL of the page consist of Current campaign', async ({ page }) => {

    //     const curCamp = await page.url();

    //     // await expect(page).toHaveURL('tournaments/champions-trophy-2025')

    //     await expect(curCamp).toContain('tournaments/champions-trophy-2025');
    
    // })

    test('Verify the title for home page  ', async ({ page }) => {

        const titleHome = await page.getByTitle('ICC Champions Trophy, 2025');

        await expect(titleHome).toContainText('ICC Champions Trophy, 2025');
    
    })

    
})
