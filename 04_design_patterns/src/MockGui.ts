import { Shipment } from './Shipment';

export class MockGui {
  on(eventType: string, callback: (state: Shipment) => void) {}
  trigger(eventType: string, state: Shipment) {}
}
