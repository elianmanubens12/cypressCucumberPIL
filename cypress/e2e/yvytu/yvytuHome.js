/// <reference types="cypress" />
const yvytuHome = require("../../pages/yvytu/yvytuhome");

describe("Tests sobre la página de YVYTU", () => {
  beforeEach(() => {
    cy.visit("https://vientosdelaselva.com.ar/");
  });

  it("Visual testing del boton ir arriba", () => {
    yvytuHome
      .getIrArribaButton()
      .should(
        "have.css",
        "background",
        "rgb(34, 153, 84) none repeat scroll 0% 0% / auto padding-box border-box"
      );
  });


});
