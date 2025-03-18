import {test,expect} from "@playwright/test"
import exp from "constants"

test.describe('This block is used for the demo project', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('https://www.icc-cricket.com/')
        
    })

    // test('Verify the tabs text and links in the search content', async ({ page }) => {

    //     const searchButton = await page.locator('//a[@href="/search"]');

    //     await page.waitForTimeout(2000);

    //     await searchButton.click();

    //     const textTerm = page.getByPlaceholder('what are you looking for?');

    //     await textTerm.fill('India');

    //     await textTerm.press('Enter');

    //     await page.waitForTimeout(10000);

    //     const menuText = ["All",
    //         "story",
    //         "album",
    //         "video"]

    //     const listItems = page.locator('//ul[contains(@class,"flex")]').allInnerTexts()

    //     await page.waitForTimeout(2000)

    //     await expect(menuText).toEqual(menuText);

    // })  

    test('Verify the links in the search content', async ({ page }) => {

        const searchButton = await page.locator('//a[@href="/search"]');

        await page.waitForTimeout(2000);

        await searchButton.click();

        const textTerm = page.getByPlaceholder('what are you looking for?');

        await textTerm.fill('India');

        await textTerm.press('Enter');

        await page.waitForTimeout(10000);

        const menuText = ['All',
            'story',
            'album',
            'video'
        ]

        const listItems = page.locator('//ul[contains(@class,"flex")]').allInnerTexts();

        console.log(await listItems)

        const listItemsLinks = [
            {text:'ALL', href : 'https://www.icc-cricket.com/search?q=India'},
            {text:'STORY', href : 'https://www.icc-cricket.com/search?q=India&facetType=type&facetValue=story'},
            {text:'ALBUM', href : 'https://www.icc-cricket.com/search?q=India&facetType=type&facetValue=album'},
            {text:'VIDEO', href : 'https://www.icc-cricket.com/search?q=India&facetType=entityCode&facetValue=video'}
        ]

        for (const linksList of listItemsLinks) {
            
            const linksList = await page.locator(listItems).locator()

        }


    })
    
})