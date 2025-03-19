import { Page,Locator, expect } from "@playwright/test";
import { stringify } from "querystring";
import { text } from "stream/consumers";

export class HomePage{

    page:Page;
    logo:Locator;
    searchButton:Locator;
    searchTextbox:Locator;

    constructor(page:Page){

        this.page = page;
        this.logo = page.getByAltText('Header Logo');
        this.searchButton = page.locator('//a[@href="/search"]');
        this.searchTextbox = page.getByPlaceholder('what are you looking for?');

    }

    async goto(){

        await this.page.goto('https://www.icc-cricket.com/')
    }

    async verifyHomePageURl(text:string){

    expect(this.page.url()).toContain(text);

    }

    async verifyHomePageTitle(text:string){

        const expectedTitle = await this.page.title();
        expect(expectedTitle).toContain(text);
    }

    async verifyHomePageSearch(){

        await this.searchButton.click();
        
    }
}