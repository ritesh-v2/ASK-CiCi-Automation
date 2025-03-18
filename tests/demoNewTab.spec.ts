import {test} from "@playwright/test"

test.describe('Verify the new tab or new page', () => {

    test.beforeEach(async ({ page }) => {
        
        await page.goto('https://www.icc-cricket.com/')

    })

    test('Verify the new page is open for the advertise', async ({ page }) => {
        
        const hotstarLink = page.locator('//img[@alt="star-sports-on-dark-background"]');

        await hotstarLink.click()

    })

    test('Verify the hotstart website', async ({ page }) => {

        await page.goto('https://www.hotstar.com/')

        try {
            await page.getByTestId('modal-close-button')
        } catch (error) {
            
        }
        
    })
    


    
    
    
})
