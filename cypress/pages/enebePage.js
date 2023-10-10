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
    
      getButtonLeerMás() {
        return cy.get('#eluid391c3d0a0');
      }

    }
    

  module.exports = new Enebe();