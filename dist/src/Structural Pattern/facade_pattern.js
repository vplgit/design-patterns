"use strict";
class OrderProcessing {
    constructor() {
        this.placeOrder = (product) => {
            console.log(`Product you ordered: ${product}`);
        };
    }
}
class PaymentProcessing {
    constructor() {
        this.processPaymemt = (amt) => {
            console.log(`Product amount: ${amt}`);
        };
    }
}
class ShippingAddress {
    constructor() {
        this.shipping = (address) => {
            console.log(`Product shipping address: ${address}`);
        };
    }
}
class ProductFacade {
    constructor(orderProcessing, paymentProcessing, shippingAddress) {
        this.processOrder = (product, amt, address) => {
            this.orderProcessing.placeOrder(product);
            this.paymentProcessing.processPaymemt(amt);
            this.shippingAddress.shipping(address);
        };
        this.orderProcessing = orderProcessing;
        this.paymentProcessing = paymentProcessing;
        this.shippingAddress = shippingAddress;
    }
}
const orderProcessing = new OrderProcessing();
const paymentProcessing = new PaymentProcessing();
const shippingAddress = new ShippingAddress();
const order = new ProductFacade(orderProcessing, paymentProcessing, shippingAddress);
order.processOrder("Mobile", 17600, "Pune");
