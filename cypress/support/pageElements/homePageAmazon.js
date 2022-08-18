const locator = require("../../locators.json")

export default class homePageAmazon{

    seeker(){

        return cy.get(locator.compraAmazon.seeker, {timeout: 12000}).should('be.visible')
    }

    searchBtn(){

        return cy.get(locator.compraAmazon.searchBtn , {timeout: 12000}).should('be.visible')
        
    
    }

    chooseProduct(){

        return cy.xpath(locator.compraAmazon.chooseProduct, {timeout: 12000}).should('be.visible')
    }

}