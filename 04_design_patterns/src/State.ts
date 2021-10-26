interface IState {
  shipmentId: number,
  toAddress: string,
  fromAddress: string,
  toZipCode: string,
  fromZipCode: string,
  weight: number,
  marks?: string[],
}

let shipmentId = 0;

export class State implements IState {
  shipmentId: number;
  toAddress: string;
  fromAddress: string;
  toZipCode: string;
  fromZipCode: string;
  weight: number;
  marks?: string[];

  constructor(fromAddress: string, fromZipCode: string, toAddress: string, toZipCode: string, weight: number, marks?: string[]) {
    this.shipmentId = shipmentId++;
    this.toAddress = toAddress;
    this.fromAddress = fromAddress;
    this.toZipCode = toZipCode;
    this.fromZipCode = fromZipCode;
    this.weight = weight;
    this.marks = marks;
  }
}