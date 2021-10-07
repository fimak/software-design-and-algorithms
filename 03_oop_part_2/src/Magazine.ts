import { Item } from './Item';
import { Pages } from './Pages';

export class Magazine extends Item {
  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }
  public get pages(): Pages {
    return this._pages;
  }
  public set pages(value: Pages) {
    this._pages = value;
  }
  constructor(private _title: string, private _pages: Pages) {
    super(_pages);
  }

  toString(): string {
    return `Magazine: ${this.title} with number of pages: ${this.pages}`;
  }
}
