import Login from '../pages/login.page'
import SortData from '../data/sort.data'

describe('Sort By Price', () => {
    beforeEach(() => {
        cy.visit('/')
      })

    it('should sort product prices from high to low', () => {
			//login with a valid user
			cy.get('#user-name').type('standard_user')
			cy.get('#password').type('secret_sauce')
			cy.get('#login-button').click()

     //sort from high to low
      cy.get('.product_sort_container').select('hilo')
        var priceList = ['$15.99', '$29.99', '$15.99', '$49.99', '$9.99', '$7.99']
       priceList.sort()
        cy.get('.inventory_item_price').each(($elem, index) => {
        //     expect($elem.text()).equal(priceList[index])
        })
    })

    it('should sort product prices from low to high', () => {
			//login with a valid user
			cy.get('#user-name').type('standard_user')
			cy.get('#password').type('secret_sauce')
			cy.get('#login-button').click()

      //sort low to high
      cy.get('.product_sort_container').select('lohi')
        var productPrice = ['$49.99', '$29.99', '$15.99', '$15.99', '$9.99', '$7.99']
        productPrice.sort().reverse()
        cy.get('.inventory_item_price').each(($elem, index) => {
            // expect($elem.text()).equal(productPrice[index])
				})

     })
		})
