import { State } from './State';

export class Shipment {
  state: State;

  constructor(state: State) {
    this.state = state;
  }

  getShipmentId(): string {
    return this.state.shipmentId.toString();
  }

  ship(): string {
    return `Shipped ${this.state.fromAddress}, ${this.state.fromZipCode} ${this.state.toAddress}, ${this.state.toZipCode}. Price is $${this.state.weight * 0.39}`;
  }
}