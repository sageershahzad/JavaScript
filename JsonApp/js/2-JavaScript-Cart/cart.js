
var cart = {
    items: [
        {
            name: 'apple', category: 'produce', price: 0.97, qty: 3
        },
        {
             name: 'whole canned corn', category: 'canned goods', price: 0.79, qty: 1
        },
        {
             name: 'lettuce', category: 'produce', price: 0.79, qty: 1
        },
        {
             name: '2% milk (1q)', category: 'dairy', price: 2.79, qty: 1
        }

    ],

    discounts: {
        'produce': 0.1,
        'canned goods': 0.2

    },

    applyDiscounts: function () {
        var that = this;
        this.items.forEach(function (item) {
            var discount = that.discounts[item.category];
            if (!discount) {
                return;
            }
            
            item.discount = item.price * discount;


        });
    }
};


var cart2 = {
    items: [
        {
            name: 'apple',
            category: 'produce',
            price: 0.97,
            qty: 3
        },
        {
            name: 'whole canned corn',
            category: 'canned goods',
            price: 0.79,
            qty: 1
        },
        {
            name: 'lettuce',
            category: 'produce',
            price: 0.79,
            qty: 1
        },
        {
            name: '2% milk (1q)',
            category: 'dairy',
            price: 2.79,
            qty: 1
        }
    ],

    addFreebie: function() {
        console.log('freebie added!');
        this.items.push({
            name: 'free candy bar',
            category: 'candy',
            price: 0,
            qty: 1
        });
    }
};

var jungle = setTimeout(function () {
        
    cart2.addFreebie();
       
    },
    5000);
console.log(jungle);

