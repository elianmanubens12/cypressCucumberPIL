class Enebe {
    //Header
    getMenuAllButton() {
      return cy.get('#menu-main-menu');
    }

    getNavBarBtn() {
      return cy.get("#menu-main-menu");
    }

    getCheckJugador() {
        return cy.get('[class="tbk__title"]');
      }
    
    }


  module.exports = new Enebe();