import { Page } from './Page';

export class PageFactory {
  static create(pagesList: any): Page[] {
    const pages: Page[] = [];
    pagesList.forEach((page:any) => {
      // @ts-ignore
      pages.push(new Page(page[0], pages[1], pages[2]))
    })
    return pages;
  }
}

const bookList = ([
  [1, 'with text', 'simple paper'],
  [2, 'with text', 'simple paper']
])

PageFactory.create(bookList)