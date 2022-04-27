import { Invoice } from "./classes/Invoice";
import { Payment } from "./classes/Payment";
import { HasFormatter } from "./interfaces/HasFormat";
import { ListTemplate } from "./classes/ListTemplate";

/* Variables */
let docOne: HasFormatter;
let docTwo: HasFormatter;
/* constans */
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
const form = document.querySelector(".new-item-form") as HTMLFormElement;
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);
/* Initilize */
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc: HasFormatter;
  let values: [string, string, number];
  values = [toFrom.value, details.value, amount.valueAsNumber];
  if (type.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }
  list.render(doc, type.value, "start");
});