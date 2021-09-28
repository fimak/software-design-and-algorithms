import { Item } from './Item';

export class Consumable extends Item {
  private consumed: boolean;
  private spoiled: boolean;

  constructor(name: string, value: number, weight: number, spoiled: boolean) {
    super(name, value, weight);
    this.consumed = false;
    this.spoiled = spoiled;
  }

  public eat(): string {
    return ''
  }

  public isConsumed(): boolean {
    return this.consumed;
  }

  public setConsumed(consumed: boolean): void {
    this.consumed = consumed;
  }

  public isSpoiled(): boolean {
    return this.spoiled;
  }

}