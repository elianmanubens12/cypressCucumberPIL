import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
const dexter = require("../../pages/dexter");

When(`clickea la opción {string}`, (txt) => {
    cy.contains(txt).click();
  });
  
  When(`realiza scroll hasta {string}`, (text) => {
    cy.contains(text).scrollIntoView();
  });

  