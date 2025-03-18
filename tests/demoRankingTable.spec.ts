import {test, expect} from "@playwright/test"
import exp from "constants"

test.describe('Ranking table Verification', () => {
    
    test.beforeEach(async ({ page }) => {

        await page.goto('https://www.icc-cricket.com/')
        const rankingButton = await page.getByRole('link',{name:'Rankings',exact:true}) //Getting the locator using the available and visible exact 
        // const rankingButton = await page.locator('//div//a[@href="/rankings/"]',{hasText:'Rankings'}).nth(1) //Getting the link by using the hastext

        await rankingButton.click()
        
    })

    test('Verify the ranking table is present', async ({ page }) => {

        expect(page.url().toLowerCase()).toContain('rankings')//Validating the URL having the rankings

        expect(await page.title()).toContain('ICC Men\'s & Women\'s Cricket Rankings Overview | ICC')

        await page.locator('//a[@href="/rankings/team-rankings/mens/odi"]').click();

        page.getByRole('heading',{name:'Men\'s odi Team Rankings',exact:true});
       
    })
    
    test('Verify the count of the teams available in the ranking table and 1st and last team', async ({ page }) => {

        await page.locator('//a[@href="/rankings/team-rankings/mens/odi"]').click();

        const totalTeams = await page.locator('.si-table-body .si-table-row')

        await expect(totalTeams).toHaveCount(20); //Verify the count of the rows or team

        await expect(totalTeams.nth(0)).toContainText('1') //rank checking
        await expect(totalTeams.nth(0)).toContainText('India') // Name checking

        await expect(totalTeams.nth(19)).toContainText('20') //rank checking
        await expect(totalTeams.nth(19)).toContainText('UAE') // Name checking
        
    })

})
