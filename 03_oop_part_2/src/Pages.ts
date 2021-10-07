import { Page } from './Page';

export class Pages {
  public list: Page[];
  public length: number;

  constructor(list: Page[]) {
    this.list = list;
    this.length = list.length;
  }

  public getPageById(id: number): Page {
    return this.list[id];
  }
}
