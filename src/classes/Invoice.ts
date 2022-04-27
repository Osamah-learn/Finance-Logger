import { HasFormatter } from "../interfaces/HasFormat";

//Classes
export  class Invoice implements HasFormatter {
    /*   client: string | undefined;
    details: string | undefined;
    amount: number | undefined; */
  
    constructor(
      readonly client: string | undefined,
      private details: string | undefined,
      public amount: number | undefined
    ) {}
  
    onFormat() {
      return `${this.client} owes ${this.amount}$  ${this.details}`;
    }
  }