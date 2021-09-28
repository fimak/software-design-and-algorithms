import { Comparable } from './Comparable';

let id = 0;

export abstract class Item implements Comparable<Item> {
    static numberOfItems: number = id;
    private id: number;
    private value: number;
    private name: string;
    private weight: number;

    protected constructor(name:string, value:number, weight:number) {
        id += 1;
        this.id = id;
        this.name = `${name}_${id}`;
        this.value = value;
        this.weight = weight;
    }

    public use(): void {

    }

    public compareTo(other: Item): number {
        if (this.value > other.value) {
            return 1;
        } else if (this.value < other.value) {
            return -1;
        }

        let value = 0;
        let index = 0;
        while (value === 0 && index < other.name.length) {
            if (this.name[index] > other.name[index]) {
                value = 1;
            } else if (this.name[index] > other.name[index]) {
                value = -1;
            }
        }

        return value;
    }

    public toString(): string {
        return `${this.name} - Value: ${this.value}, Weight: ${this.weight}`;
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getValue(): number {
        return this.value;
    }

    public setValue(value: number): void {
        this.value = value;
    }

    public getWeight(): number {
        return this.weight;
    }

    public setWeight(weight: number): void {
        this.weight = weight;
    }

    public static reset(): void {
        id = 0;
    }
}
