///<reference types="cypress" />

context('Home Page', () => {
	const title = 'Welcome to the technical test of Rubén Saldaña. To access the application, press the button below:';
	beforeEach(() => {
		cy.visit('http://localhost:3000');
	});

	it('Should reload the page', () => {
		cy.reload();
		cy.reload(true);
	});

	it('Should display welcome text', () => {
		cy.get("h1").contains(title);
	});

	it('Should go to the Bikes page when the button is clicked', () => {
		cy.get('a').click();
		cy.url().should('be.equal', 'http://localhost:3000/bikes');
	});
});
