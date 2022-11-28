describe('Activity 3', () => {
	beforeEach(() => {
			cy.visit('/')
		})

	it('Login with a valid user', () => {
			// Enter username & password then click the login button
			cy.get('#user-name').type('standard_user')
			cy.get('#password').type('secret_sauce')
			cy.get('#login-button').click()
	})
})