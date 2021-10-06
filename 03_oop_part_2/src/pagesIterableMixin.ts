export class pagesIterableMixin {
  [Symbol.iterator]()  {
    const current = 0;
    const last = this.pages.list.length;

    return {
      next() {
        if (current < last) {
          return {
            done: false,
            // @ts-ignore
            value: this.page.list[current++],
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

