import { PagesIterableMixin } from './PagesIterableMixin';
import { Pages } from './Pages';

export abstract class Item extends PagesIterableMixin(Object) {
  protected pages: Pages;
  protected constructor(pages: Pages) {
    super();
    this.pages = pages;
  }

  abstract toString(): string;
}