interface PaymentGateway {
  processPayment(amount: number): void;
}

class ThirdPartyPaymentGateway {
  makePaymemt = (amout: number): void => {
    console.log(`Payment done for ${amout}`);
  };
}

class PaymentAdapter implements PaymentGateway {
  private thirdPartyPayment: ThirdPartyPaymentGateway;

  constructor(thirdPartyPayment: ThirdPartyPaymentGateway) {
    this.thirdPartyPayment = thirdPartyPayment;
  }
  processPayment(amount: number): void {
    this.thirdPartyPayment.makePaymemt(amount);
  }
}

const thirdPartyService = new ThirdPartyPaymentGateway();

const paymentGateway: PaymentGateway = new PaymentAdapter(thirdPartyService);

paymentGateway.processPayment(10);
