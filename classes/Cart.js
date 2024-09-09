class Cart{
    constructor(products,total){
        this.products = []
        this.total = 0
    }
    addProduct(){
        this.products.push(this.products)
        this.products.forEach(x => {
            total += x
        })
    }
    removeProduct(product){
        this.products.pop()
        this.products.forEach(x => {
            total += x
        })
    }
}

module.exports = Cart
