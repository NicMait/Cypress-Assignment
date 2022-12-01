class Cart{

	get addToCartBtn () { return ('#add-to-cart-sauce-labs-bolt-t-shirt')}
	get addToCartBtn2 () { return ('#add-to-cart-sauce-labs-bike-light')}
	get cartIcon() { return ('.shopping_cart_link') }
	get cartIconNumber () { return ( '.shopping_cart_badge')}
  get productName () { return ('.inventory_item_name')}
	get productName2 () { return ('a[id="item_0_title_link"]')}
  get productPrice () { return ('.inventory_item_price')}
	get productPrice2 () { return ('div:nth-child(3) div:nth-child(2) > div:nth-child(3) > div:nth-child(1)')}

	get checkoutBtn () { return ('#checkout')}
	get firstName () { return ('#first-name')}
	get lastName () { return ('#last-name')}
	get zipCode () { return ('#postal-code')}
	get ctnBtn () { return ('#continue')}
  get finish () { return ('#finish')}
	get completeBanner () { return ('.complete-header')}



	addToCart(){
		let addToCartBtn = '#add-to-cart-sauce-labs-bolt-t-shirt'
		cy.get(addToCartBtn).should('be.visible')
		cy.get(addToCartBtn).click()

	}

	checkOutInfo(){
		let checkoutBtn = '#add-to-cart-sauce-labs-bolt-t-shirt'
		cy.get(this.firstName).type('Granit')
		cy.get(this.lastName).type('Xhaka')
		cy.get(this.zipCode).type('529-1421')

	}

	addToCart2(){
		let addToCartBtn2 = '#add-to-cart-sauce-labs-bike-light'
		cy.get(addToCartBtn2).should('be.visible')
		cy.get(addToCartBtn2).click()

	}



}

export default new Cart()