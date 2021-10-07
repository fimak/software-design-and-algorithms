import { Page } from './Page';

export class Pages {
  public pages: Page[];

  constructor(pages: Page[]) {
    this.pages = pages;
  }

  public getLength(): number {
    return this.pages.length;
  }
}
