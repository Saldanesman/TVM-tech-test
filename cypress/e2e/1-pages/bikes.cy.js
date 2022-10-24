///<reference types="cypress" />

context('Bikes page', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/bikes');
	});

	it('Should reload the page', () => {
		cy.reload();
		cy.reload(true);
	});

	it('Should be render bike pages', () => {
		cy.get('div[data-testid=bike-list]').should('be.visible');
	});
});
