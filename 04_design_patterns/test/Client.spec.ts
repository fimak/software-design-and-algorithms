import { Shipment } from '../src/Shipment';
import { State } from '../src/State';

describe('Client', () => {
  it('Test', () => {
    const state: State = new State('From Omsk', '644034', 'To Moscow', '777777', 42, ['simple', 'cheap']);
    const shipment: Shipment = new Shipment(state);
    const log = shipment.ship();

    expect(log).toEqual('Shipped From Omsk, 644034 To Moscow, 777777. Price is $16.38');
  });
});