import { Page } from './Page';

interface Iterator {
  done: boolean,
  value: Page,
}

interface BaseClass {
  pages: Page[],
  toString: () => string,
}

export const PagesIterableMixin = (baseClass: any) => class extends baseClass {
  [Symbol.iterator]()  {
    let currentId = 0;
    let pages = this.pages.pages;

    return {
      next: (): Iterator => {
        if (currentId < this.pages.length) {
          const page = this.pages.pages[currentId++];
          const pageDescription = page.toString();
          return {
            done: false,
            value: Object.assign(page, {
              toString: () => `${this.toString()}, ${pageDescription}`
            }),
          }
        } else {
          return { done: true, value: this.pages.pages[currentId] }
        }
      }
    }

  }
}

