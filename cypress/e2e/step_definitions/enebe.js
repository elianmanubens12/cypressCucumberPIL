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

  When('el usuario hace scroll hasta el botón {string}', (btnleer) => {
    // Usa scrollIntoView para desplazarte al botón
    enebeHome.getButtonLeerMás(btnleer).then($boton => {
        $boton[0].scrollIntoView();
      });
});

When('el usuario presiona en la Home el botón {string}', (buttonleer) => {
    // Haz clic en el botón después de desplazarte a él
    enebeHome.getButtonLeerMás(buttonleer).click();
});
  
  
