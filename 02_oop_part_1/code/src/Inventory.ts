import { Item } from './Item';
import { ItemComparator } from './ItemComparator';
import { ItemWeightComparator } from './ItemWeightComparator';

export class Inventory {
  public items: Array<Item>;

  constructor() {
    this.items = []
  }

  public addItem(item: Item): void {
    this.items.push(item);
  }

  public sort(): void;
  public sort(comparator: ItemComparator | ItemWeightComparator): void;
  public sort(comparator?: ItemComparator | ItemWeightComparator): void {
    if (comparator) {
      this.items.sort(comparator.compare);
    } else {
      this.items.sort((a, b) => (a.getValue() > b.getValue() ? 1 : -1));
    }
  }

  public toString(): string {
    return this.items.reduce((acc, item, index) => {
      acc = `${acc}${item.toString()}`;
      if (index < this.items.length) {
        acc = `${acc} \n`;
      }
      return acc;
    }, '\n');
  }
}