class ClaroHeader {
    getHeaderOptionMenu() {
      return cy.get('[data-test="mt-link"]');
    }
 
  
  getMenuButton() {
    return cy.get('[class="MenuTienda_desktop__2DgcE"]');
  }
}
  module.exports = new ClaroHeader();