import {test,expect} from "@playwright/test"

test.describe('Test Suite', () => {

    test.beforeEach(async({page})=>{

        await page.goto('https://sdetunicorns.com/');

    });

    test('verify the text for selling course',async({page})=>{

        const sellCourse = await page.locator('text="Selling Courses"');

        await expect(sellCourse).toBeVisible()

    })

    test('Verify the text is availabe on the page', async ({ page }) => {

        const masterText = page.locator('text="Master Software Testing and Automation"');

        await expect(masterText).toBeVisible();
        
    })
    

    
})