import { Shape } from './Shape';
import { Point } from "./Point";

export class Triangle extends Shape {
  constructor(point1: Point, point2: Point, point3: Point);
  constructor(point1: Point, point2: Point, point3: Point, color?: string, filled?: boolean) {
    super([point1, point2, point3]);
    this.color = color || 'green';
    this.filled = filled === undefined ? true : filled;
  }

  toString() {
    console.log(this);
    const points = this.points.reduce((acc, point, index, arr) => {
      return `${acc}v${index + 1}=(${point.x}, ${point.y})${index < arr.length - 1 ? ',' : ''}`
    }, '');
    return `Triangle[${points}]`
  }

  getType() {
    const sides = this.points.reduce((acc, point, index, arr) => {
      let nextPoint;
      if (index === arr.length - 1) {
        nextPoint = arr[0];
      } else {
        nextPoint = arr[index + 1];
      }
      const side = point.distance(nextPoint.x, nextPoint.y);
      acc.push(side);
      return acc;
    }, []);

    const uniqSides = Array.from(new Set(sides));

    console.log(sides, uniqSides);

    if (uniqSides.length === 1) {
      return 'equilateral triangle';
    } else if (uniqSides.length === 2) {
      return 'isosceles triangle';
    }
    return 'scalene triangle';
  }


}
