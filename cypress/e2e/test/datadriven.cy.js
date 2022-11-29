

import Login from '../pages/login.page'
import usersData from '../data/users.data'

describe('Log In', () => {
	beforeEach(() => {
			cy.visit('/')
		})

	it('Login with a valid user', () => {
			// Enter username & password then click the login button
			cy.get('#user-name').type(usersData.valid.username)
			cy.get('#password').type(usersData.valid.password)
			cy.get('#login-button').click()

	})

	it('Login with a locked out user', () => {
		// Enter username & password then click the login button
		cy.get('#user-name').type(usersData.lockedOutUser.username)
		cy.get('#password').type(usersData.lockedOutUser.password)
		cy.get('#login-button').click()
		cy.get(' h3[data-test="error"]')

}),

 it('Login with a problem user', () => {
	// Enter username & password then click the login button
	cy.get('#user-name').type(usersData.problemUser.username)
	cy.get('#password').type(usersData.problemUser.password)
	cy.get('#login-button').click()

}),

  it('Login with a performance glitch user', () => {
	// Enter username & password then click the login button
	cy.get('#user-name').type(usersData.performanceGlitchUSer.username)
	cy.get('#password').type(usersData.performanceGlitchUSer.password)
  cy.get('#login-button').click()

})

})