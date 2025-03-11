import {test,expect} from "@playwright/test"

test.describe('Test Suite for the csstext validation', () => {

    test.beforeEach(async ({page}) => {

        await page.goto('https://sdetunicorns.com/');
        
    })

    test('Verify the element which having the CSS and Text', async ({ page }) => {
        
        const cssText = page.locator('.elementor-icon-box-title>>text=" 						Beginner friendly content					"');
        await  expect(cssText).toBeVisible();
    })
    
})
