import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
const claroHome = require("../../pages/homeClaro");

When(`posiciona el mouse sobre {string}`, (option) => {
  claroHome.getHeaderOptionMenu().contains(option).realHover();
});


Then ('se visualizan en el header los botones {string}', (lista) => {
  lista = lista.split(", ");

  claroHome.getMenuButton().each((buton, $inx) => {
    if ($inx != 0) {
      cy.wrap(buton).should("have.text", lista[$inx - 1]);
    }
  });
});