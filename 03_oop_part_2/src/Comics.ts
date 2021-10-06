import Item from './Item';
import { Pages } from './Pages';

export class Comics extends Item {
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
  public get artist(): string {
    return this._artist;
  }
  public set artist(value: string) {
    this._artist = value;
  }
  constructor(private _title: string, private _artist: string, private _author: string, private _pages: Pages) {
    super();
  }

  toString(): string {
    return `Comics: ${this._title} by ${this._author}, the artist is ${this._artist}, number of pages: ${this._pages}`;
  }
}
