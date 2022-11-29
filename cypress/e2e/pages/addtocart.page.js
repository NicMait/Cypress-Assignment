class Cart{

	get addToCartBtn () { return ('#add-to-cart-sauce-labs-bolt-t-shirt')}
	get cartIcon() { return ('.shopping_cart_link') }
	get cartIconNumber () { return ( '.shopping_cart_badge')}
  get productName () { return ('.inventory_item_name')}
  get productPrice () { return ('.inventory_item_price')}

	get checkoutBtn () { return ('#checkout')}
	get firstName () { return ('#first-name')}
	get lastName () { return ('#last-name')}
	get zipCode () { return ('#postal-code')}



	addToCart(){
		let addToCartBtn = '#add-to-cart-sauce-labs-bolt-t-shirt'
		cy.get(addToCartBtn).should('be.visible')
		cy.get(addToCartBtn).click()

	}

	checkOutInfo(Granit, Xhaka){
		let checkoutBtn = '#add-to-cart-sauce-labs-bolt-t-shirt'
		cy.get(this.firstName).type('Granit')
		cy.get(this.lastName).type('Xhaka')
		cy.get(this.zipCode).type('529-1421')

	}



}

export default new Cart()