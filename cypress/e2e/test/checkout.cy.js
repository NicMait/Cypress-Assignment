import Login from '../pages/login.page'
import Cart from '../pages/addtocart.page'


describe('Checkout Flow', () => {
	beforeEach(() => {
			cy.visit('/')
		})

it('Add a single product to cart', () => {
	// login with valid user
	cy.get('#user-name').type('standard_user')
	cy.get('#password').type('secret_sauce')
	cy.get('#login-button').click()

	// Assert that the user is taken to the Products page
	cy.get('.inventory_item_name').should('be.visible')
	cy.get('.title').contains('Products')
	cy.url().should('contain', 'inventory')

	//add an item to cart
  Cart.addToCart()
	cy.get(Cart.cartIconNumber).should('have.text',1)

	//Navigate to the cart
	cy.get(Cart.cartIcon).should('be.visible')
	cy.get(Cart.cartIcon).click()
	cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Bolt T-Shirt')
	cy.get('.inventory_item_price').should('have.text', '$15.99')

	//checkout a single product
	cy.get(Cart.checkoutBtn).should('be.visible')
	cy.get(Cart.checkoutBtn).click()
	Cart.checkOutInfo()
	cy.get(Cart.ctnBtn).should('be.visible')
	cy.get(Cart.ctnBtn).click()

	//Verify Information
	cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Bolt T-Shirt')
	cy.get('.inventory_item_price').should('have.text', '$15.99')

	//Complete process
	cy.get(Cart.finish).should('be.visible')
	cy.get(Cart.finish).click()
	cy.get(Cart.completeBanner).should('have.text','THANK YOU FOR YOUR ORDER')









})

// it('Add multiple products to cart', () => {
// 	// Login with a valid user
// 	cy.get('#user-name').type('standard_user')
// 	cy.get('#password').type('secret_sauce')
// 	cy.get('#login-button').click()

// 	// Click add to cart button
// 	cy.get('#add-to-cart-sauce-labs-backpack').click()

// 	// Assert the notification on the cart icon then navigate to cart
// 	cy.get('.shopping_cart_badge').should('have.text', 1)

// })

})