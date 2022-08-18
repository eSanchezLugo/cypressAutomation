
import {Given, When, And, Then} from "@badeball/cypress-cucumber-preprocessor";
import homePageAmazon from "../../support/pageElements/homePageAmazon";
const locator = require("../../locators.json")


let HomePageAmazon = new homePageAmazon();


Given("Navego a la pagina {string}", async (url)=>{

        cy.clearCookies()
        cy.visit(url);
});

When("Limpio y escribo en el buscador {string}", async (text)=>{
    
    HomePageAmazon.seeker().clear();
    HomePageAmazon.seeker().type(text);
    
});

Then("Doy clic en el boton de buscar", async () =>{
    
    HomePageAmazon.searchBtn().click();

});


And("Verifico que existan los siguientes articulo:", async () =>{

    cy.get(locator.compraAmazon.productList, {timeout: 12000});
    cy.and($text => {
        expect($text.get(0).textContent, 'item[0]').to.equal('Funko POP Animation: Yu-Gi-Oh - Blue Eyes Toon Dragon (Mettalic),Multicolor,57648');
        expect($text.get(1).textContent, 'item[1]').to.equal('Funko POP! Animation: Yu-Gi-Oh - 6" Stardust Dragon' );  

    });
});

And("Doy clic al articulo {string}", async () =>{

    HomePageAmazon.chooseProduct().click();

});