

var cart = {

    customer: "Judy",

    subTotal: function () {

        console.log('subTotal called for ' + this.customer);
    }
}


//cart2.subTotalAlone();
var cart2 = {

    customer: "Jason",

    subTotalAlone: cart.subTotal
}


//cart3.subTotalAll();
var cart3 = {
    customer: "Petter",

    subTotalAll: cart.subTotal
}

var taxRate = 0.0325;

var cart4 = {
    subTotal: function() {
        return 15;
    },

    total: function () {
        
        function getTax() {
            
            return this.subTotal() * this.taxRate;

        }

        return this.subTotal() * getTax();
    }


}