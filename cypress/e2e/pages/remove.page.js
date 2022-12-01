
class Remove{

  get removeLight () { return ('#remove-sauce-labs-bike-light')}
	get removeTshirt () { return ('#remove-sauce-labs-bolt-t-shirt')}




  removeItems () {
			let removeLight = '#remove-sauce-labs-bike-light'
			let removeTshirt = '#remove-sauce-labs-bolt-t-shirt'
			cy.get(this.removeLight).click()
			cy.get(this.removeTshirt).click()


	}


}

export default new Remove()