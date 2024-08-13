class OrderProcessing {
  placeOrder = (product: string): void => {
    console.log(`Product you ordered: ${product}`);
  };
}

class PaymentProcessing {
  processPaymemt = (amt: number): void => {
    console.log(`Product amount: ${amt}`);
  };
}

class ShippingAddress {
  shipping = (address: string): void => {
    console.log(`Product shipping address: ${address}`);
  };
}

class ProductFacade {
  private orderProcessing: OrderProcessing;
  private paymentProcessing: PaymentProcessing;
  private shippingAddress: ShippingAddress;

  constructor(
    orderProcessing: OrderProcessing,
    paymentProcessing: PaymentProcessing,
    shippingAddress: ShippingAddress
  ) {
    this.orderProcessing = orderProcessing;
    this.paymentProcessing = paymentProcessing;
    this.shippingAddress = shippingAddress;
  }

  processOrder = (product: string, amt: number, address: string): void => {
    this.orderProcessing.placeOrder(product);
    this.paymentProcessing.processPaymemt(amt);
    this.shippingAddress.shipping(address);
  };
}

const orderProcessing = new OrderProcessing();
const paymentProcessing = new PaymentProcessing();
const shippingAddress = new ShippingAddress();
const order = new ProductFacade(
  orderProcessing,
  paymentProcessing,
  shippingAddress
);

order.processOrder("Mobile", 17600, "Pune");
