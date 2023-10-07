import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
const enebeHome = require("../../pages/enebePage");

Then(`se visualiza en el header los botones {string}`, (list) => {
    list = list.split(", ");
  
    enebeHome.getMenuAllButton().each((btn, $inx) => {
      if ($inx != 0) {
        cy.wrap(btn).should("have.text", list[$inx - 1]);
      }
    });
  });
  

  When(`presiona en el header el boton {string}`, (btnHeader) => {
   enebeHome.getNavBarBtn().contains(btnHeader).click();
  });
  
  Then(`se verifica el jugador {string}`, () => {
    enebeHome.getCheckJugador();
  });