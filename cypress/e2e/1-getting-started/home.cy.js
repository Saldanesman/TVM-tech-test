///<reference types="cypress" />

context('Navigation', () => {
	beforeEach(() => {
		cy.visit('https://localhost:3000');
	});

	it('Should reload the page', () => {
		cy.reload();
		cy.reload(true);
	});

  it('Shoult display welcome text', () => {
		cy.title().should('include', 'Kitchen Sink');
	});
});
