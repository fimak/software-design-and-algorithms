import {pagesIterableMixin} from './pagesIterableMixin';

export abstract class Item {
  protected constructor() {}
  abstract toString(): string;
}

Object.assign(Item.prototype, pagesIterableMixin);

export default Item;