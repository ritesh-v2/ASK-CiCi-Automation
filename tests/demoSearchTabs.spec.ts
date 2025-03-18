import {test,expect} from "@playwright/test"
import exp from "constants"

test.describe('This block is used for the demo project', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('https://www.icc-cricket.com/')
        
    })

    test('Verify the links in the search content', async ({ page }) => {

        const searchButton = await page.locator('//a[@href="/search"]');

        await page.waitForTimeout(2000);

        await searchButton.click();

        const menuText = ['All',
            'story',
            'album',
            'video'
        ]

        const listItems = await page.locator('//ul[contains(@class,"flex")]//li//a').allTextContents();//Return 4 nodes
        console.log(listItems) //Getting the values from listitems
        expect(listItems).toEqual(menuText) // Checking the value

        const listItemsLinks = [
            {text:'All', href : '/search?q='},
            {text:'story', href : '/search?q=&facetType=type&facetValue=story'},
            {text:'album', href : '/search?q=&facetType=type&facetValue=album'},
            {text:'video', href : '/search?q=&facetType=entityCode&facetValue=video'}
        ] //Storing the value which we need to verify

        for (const [index, tabItem] of listItemsLinks.entries()) {

            const Link = page.locator('//ul[contains(@class,"flex")]//li//a').nth(index);

            await expect(Link).toHaveText(tabItem.text);
            await expect(Link).toHaveAttribute('href', tabItem.href);
        }


    })
})