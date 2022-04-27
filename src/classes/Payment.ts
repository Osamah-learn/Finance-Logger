import { HasFormatter } from "../interfaces/HasFormat.js";

//Classes
export  class Payment implements HasFormatter {
    /*   client: string | undefined;
    details: string | undefined;
    amount: number | undefined; */
  
    constructor(
      readonly recipient: string | undefined,
      private details: string | undefined,
      public amount: number | undefined
    ) {}
  
    onFormat() {
      return `${this.recipient} owed ${this.amount}$  ${this.details}`;
    }
  }