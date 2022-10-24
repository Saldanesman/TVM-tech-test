///<reference types="cypress" />

context('No Match page', () => {
	const title = 'Page 404';
	beforeEach(() => {
		cy.visit('http://localhost:3000/*');
	});

	it('Should reload the page', () => {
		cy.reload();
		cy.reload(true);
	});

	it('Should display 404 text', () => {
		cy.get('h1').contains(title);
	});

	it('Should go to the Bikes page when the button is clicked', () => {
		cy.get('a').click();
		cy.url().should('be.equal', 'http://localhost:3000/bikes');
	});
});
