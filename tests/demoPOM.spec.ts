import {test,expect} from "@playwright/test"
import { HomePage } from "../pages/demoHome.page"

test('Verify the Home page URL and Title', async ({ page }) => {

    const homePage = new HomePage(page);

    await homePage.goto();

    await homePage.PageURL('icc-cricket')
    
})//Verify the URL

test('Verify the Home page Title', async ({ page }) => {

    const homePage = new HomePage(page);

    await homePage.goto();

    await homePage.verifyHomePageTitle('Official International Cricket Council Website')
    
})//Verify the Title of the page

test('Verify the navigation to search page', async ({ page }) => {

    const homePage = new HomePage(page)

    await homePage.goto()

    await homePage.navigateToHomePageSearch();

    await homePage.PageURL('https://www.icc-cricket.com/search');
    
})//Verify the navigation to search page with URL
test('Verify the search for respective team', async ({ page }) => {

    const homePage = new HomePage(page);

    await homePage.goto();

    await homePage.navigateToHomePageSearch();

    await homePage.searchTeam('India');

    await homePage.PageURL('https://www.icc-cricket.com/search')

})

