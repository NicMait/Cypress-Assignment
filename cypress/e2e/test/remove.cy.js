import Login from '../pages/login.page'
import Cart from '../pages/addtocart.page'
import Remove from '../pages/remove.page'

describe('Remove Items from Cart and Product Page', () => {
	beforeEach(() => {
			cy.visit('/')
		})

		it('Remove item from Product page', () => {
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

			//remove one of  the items
			cy.get('#remove-sauce-labs-bike-light').should('be.visible')
			cy.get('#remove-sauce-labs-bike-light').click()
			cy.get(Cart.cartIconNumber).should('have.text',1)

		})

		it('Remove item from Cart', () => {
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
				Remove.removeItems()

			})

			})

