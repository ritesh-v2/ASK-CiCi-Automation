import {test,expect} from '@playwright/test'
import exp from 'constants';

test.describe('FirstPage', () => {

    test.beforeEach(async ({page}) => {
        await page.goto('https://sdetunicorns.com/');
    });

    test('Validating the join academy page',async ({page}) => {

        await expect(page).toHaveTitle("Master Software Testing and Automation | SDET Unicorns")

        await page.locator("//div/section[1]/div/div[2]/div/div[1]/div/div/nav/ul/li[7]/a").click();

        const texten = page.locator("//h2[@class='ekit-heading--title elementskit-section-title ']");

        await expect(texten).toBeVisible();

        const comm =page.locator("//a[@href='https://sdetunicorns.com/community/']//span[@class='elementor-icon-list-text']");

        await comm.click();

        await expect(page).toHaveTitle("Community | SDET Unicorns");

        await expect(page).toHaveURL('https://sdetunicorns.com/community/')

    })
});