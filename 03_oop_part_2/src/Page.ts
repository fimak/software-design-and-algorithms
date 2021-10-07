export enum PageType {
  'with text' = 'with text',
  'with article' = 'with article',
  'with images' = 'with images',
}

export enum MaterialType {
  'simple paper' = 'simple paper',
  'glossy paper' = 'glossy paper',
}

export class Page {
  public pageNumber: number;
  public pageType: string;
  public pageMaterial: string;
  constructor(pageNumber: number, pageType: string, pageMaterial: string) {
    this.pageNumber = pageNumber;
    this.pageType = pageType;
    this.pageMaterial = pageMaterial;
  }
  toString(): string {
    return `here is page ${this.pageType} #${this.pageNumber} and it\'s material is ${this.pageMaterial}`;
  }
}
