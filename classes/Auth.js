let Customer = require("./Customer")

class Auth{
    constructor(){
        this.customers = [];
    }

    register(name, email, shippingAddress){
        const newCust = new Customer(name,email,shippingAddress);
        this.customers.push(newCust);
    }

    login(email){
        let found = null;
        for (let i = 0; i< this.customers.length - 1; i++){
            if (this.customers[i].email == email){
                found = this.customers[i];
            }
        }
        return found;
    }
}

module.exports = Auth;