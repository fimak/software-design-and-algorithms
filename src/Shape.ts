import { Point } from "./Point";

export abstract class Shape {
    protected color: string;
    protected filled: boolean;
    protected points: Point[];

    constructor(points: Point[]);
    constructor(points, color?:string, filled?: boolean) {
        if (points.length < 3) {
            throw new Error("Shape should have 3 points at least.");
        }
        this.points = points;
        this.color = color || 'green';
        this.filled = filled === undefined ? true : filled;
    }

    abstract getType(): string;

    toString() {
        const points = this.points.reduce((acc, point, index, array) => `${acc} (${point.x}, ${point.y})${index < array.length - 1 ? ',' : ''}`, '');
        return `A Shape with color of ${this.color} and ${this.filled ? '' : 'not '}filled. Points:${points}.`
    }

    getPerimeter() {
        return this.points.reduce((acc, point, index, arr) => {
            let nextPoint;
            if (index === arr.length - 1) {
                nextPoint = arr[0];
            } else {
                nextPoint = arr[index + 1];
            }
            return acc + point.distance(nextPoint.x, nextPoint.y);
        }, 0);
    }

}
