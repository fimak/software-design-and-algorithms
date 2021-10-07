import { Item } from './Item';
import { Pages } from './Pages';

export class Book extends Item {
  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }
  public get author(): string {
    return this._author;
  }
  public set author(value: string) {
    this._author = value;
  }
  public get pages(): Pages {
    return this._pages;
  }
  public set pages(value: Pages) {
    this._pages = value;
  }
  constructor(private _title: string, private _author: string, private _pages: Pages) {
    super(_pages);
  }
  toString(): string {
    return `Book: ${this.title} by ${this.author} with number of pages: ${this.pages}`;
  }
}
