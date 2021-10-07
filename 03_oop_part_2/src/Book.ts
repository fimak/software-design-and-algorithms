import { Item } from './Item';
import { Pages } from './Pages';

export class Book extends Item {
  public title:string;
  public author:string;
  constructor(title: string, author: string, pages: Pages) {
    super(pages);
    this.title = title;
    this.author = author;
  }
  toString(): string {
    return `Book: ${this.title} by ${this.author} with number of pages: ${this.pages}`;
  }
}
