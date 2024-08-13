"use strict";
class ThirdPartyPaymentGateway {
    constructor() {
        this.makePaymemt = (amout) => {
            console.log(`Payment done for ${amout}`);
        };
    }
}
class PaymentAdapter {
    constructor(thirdPartyPayment) {
        this.thirdPartyPayment = thirdPartyPayment;
    }
    processPayment(amount) {
        this.thirdPartyPayment.makePaymemt(amount);
    }
}
const thirdPartyService = new ThirdPartyPaymentGateway();
const paymentGateway = new PaymentAdapter(thirdPartyService);
paymentGateway.processPayment(10);
