import { PagesIterableMixin } from './PagesIterableMixin';
import { Pages } from './Pages';

export abstract class Item extends PagesIterableMixin(Object) {
  public get pages(): Pages {
    return this._pages;
  }

  protected constructor(pages: Pages) {
    super();
    this._pages = pages;
  }

  abstract toString(): string;
}