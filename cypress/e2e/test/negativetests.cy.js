import Login from '../pages/login.page'
import Cart from '../pages/addtocart.page'

describe('Negative Testing', () => {
	beforeEach(() => {
			cy.visit('/')
		})

it('Omit information in checkout', () => {
	// login with valid user
	cy.get('#user-name').type('standard_user')
	cy.get('#password').type('secret_sauce')
	cy.get('#login-button').click()

	// Assert that the user is taken to the Products page
	cy.get('.inventory_item_name').should('be.visible')
	cy.get('.title').contains('Products')
	cy.url().should('contain', 'inventory')

	//add items to cart
	Cart.addToCart()
	Cart.addToCart2()
	cy.get(Cart.cartIconNumber).should('have.text',2)

 //Navigate to cart and remove items
cy.get(Cart.cartIcon).should('be.visible')
cy.get(Cart.cartIcon).click()

//Checkout empty cart
cy.get(Cart.checkoutBtn).should('be.visible')
cy.get(Cart.checkoutBtn).click()
cy.get('#first-name').type('Jamal')
cy.get('#postal-code').type(1539)
cy.get(Cart.ctnBtn).should('be.visible')
cy.get(Cart.ctnBtn).click()
cy.get('h3[data-test="error"]').should('be.visible')

})

it('Login with the incorrect password', () => {
	// login with valid user
	cy.get('#user-name').type('standard_user')
	cy.get('#password').type('password')
	cy.get('#login-button').click()
	cy.get('h3[data-test="error"]').should('be.visible')


})


})