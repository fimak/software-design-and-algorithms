import { MockGui } from './MockGui';
import { Shipment } from './Shipment';

export class Client {
  gui: MockGui;

  constructor(gui: MockGui) {
    this.gui = gui;
  }

  private onShip(shipment: Shipment) {
    shipment.ship();
  }
}