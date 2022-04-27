import { HasFormatter } from "../interfaces/HasFormat";

export class ListTemplate {
  constructor(private container: HTMLUListElement) {}

  render(item: HasFormatter, heading: string,pos: "start" | "end" ) {
    const li = document.createElement("li");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");
    h4.innerText = heading;
    p.innerText = item.onFormat();
    li.appendChild(h4);
    li.appendChild(p);
    pos === "start" ? this.container.prepend(li):this.container.appendChild(li);
    
  }
}