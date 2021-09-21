export class Point {
  x: number;
  y: number;

  constructor(); 
  constructor(x:number = 0, y:number = 0) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }

  distance(): number;
  distance(other: Point): number;
  distance(x:number, y:number): number 
  distance(paramOne?: number | Point, paramTwo?: number):number {
    let x:number;
    let y:number;
    if (typeof paramOne === 'undefined') {
      x = 0; y = 0;
    } else if (typeof paramOne === 'object') {
      x = paramOne.x; y = paramOne.y;
    } else {
      x = paramOne; y = paramTwo;
    }
    const a = Math.abs(this.x - x);
    const b = Math.abs(this.y - y);
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  }
}
