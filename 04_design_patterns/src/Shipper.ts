import { State } from './State';

export abstract class Shipper {
  protected state: State;

  protected constructor(state: State) {
    this.state = state;
  }

  abstract getCost(): string;
}
