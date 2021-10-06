import { Book } from './Book';
import { Magazine } from './Magazine';
import { MaterialType, Page, PageType } from './Page';
import { Pages } from './Pages';

const book = new Book('Harry Potter', 'J.K.Rowling.', new Pages([
  new Page(1, PageType['with text'], MaterialType['simple paper']),
  new Page(2, PageType['with text'], MaterialType['simple paper']),
  new Page(3, PageType['with text'], MaterialType['simple paper']),
  new Page(4, PageType['with text'], MaterialType['simple paper']),
]));

for (let page of book) {
  console.log(page);
}

const magazine = new Magazine('G.Q', new Pages([
  new Page(1, PageType['with text'], MaterialType['glossy paper']),
  new Page(2, PageType['with text'], MaterialType['glossy paper']),
]));

for (let page of magazine) {
  console.log(page);
}

const comics = new Comics('Spider-Man', 'Stan Lee', 'Some artist', new Pages([
  new Page(1, PageType['with text'], MaterialType['glossy paper']),
  new Page(2, PageType['with text'], MaterialType['glossy paper']),
]));

console.log(new Page(1, PageType['with article'], MaterialType['glossy paper']));


