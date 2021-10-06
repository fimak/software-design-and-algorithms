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
  public get pageNumber(): number {
    return this._pageNumber;
  }
  public set pageNumber(value: number) {
    this._pageNumber = value;
  }
  public get pageType(): PageType {
    return this._pageType;
  }
  public set pageType(value: PageType) {
    this._pageType = value;
  }
  public get pageMaterial(): MaterialType {
    return this._pageMaterial;
  }
  public set pageMaterial(value: MaterialType) {
    this._pageMaterial = value;
  }
  constructor(private _pageNumber: number, private _pageType: PageType, private _pageMaterial: MaterialType) {}
}
