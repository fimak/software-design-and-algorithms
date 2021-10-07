import { Page } from './Page';

interface Iterator {
  done: boolean,
  value?: Page,
}

interface BaseClass {
  pages: Page[],
  toString: () => string,
}

export const PagesIterableMixin = (baseClass: any) => class extends baseClass {
  [Symbol.iterator]()  {
    let currentId = 0;

    return {
      next: (): Iterator => {
        if (currentId < this.pages.length) {
          const page = this.pages.list[currentId++];
          return {
            done: false,
            value: page,
          }
        } else {
          return {
            done: true,
          }
        }

      }
    }
  }
}

