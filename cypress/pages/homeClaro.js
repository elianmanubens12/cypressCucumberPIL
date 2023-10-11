class ClaroHeader {
    getHeaderOptionMenu() {
      return cy.get('[data-test="mt-link"]');
    }
 
  
  getMenuButton() {
    return cy.get('[class="MenuTienda_desktop__2DgcE"]');
  }

  getIngresabtn() {
    return cy.get('[class="MenuTienda_text_button__ocMYe"]');
  }

  getSubtitle() {
    return cy.get('[card__page-link__paragraph]');
  }
}
  module.exports = new ClaroHeader();