import { Controller } from "@hotwired/stimulus";

export const ITEM_SELECTED = "phlexui--combobox-item#selected";

export default class extends Controller {
  static targets = ["check"];

  connect() {
    console.log("lui--combobox-item connected");
    document.addEventListener(ITEM_SELECTED, (e) => this.uncheck(e.detail), false);
  }

  click(e) {
    console.log(e.target);

    this.checkTarget.classList.toggle("invisible", false);

    const { value } = this.element.dataset;
    const label = this.element.innerText;

    console.log("value: ", value);
    console.log("label: ", label);

    const event = new CustomEvent(ITEM_SELECTED, { detail: { value, label } });
    document.dispatchEvent(event);
  }

  disconnect() {
    document.removeEventListener(ITEM_SELECTED, (e) => this.uncheck(e.detail), false);
  }

  uncheck({ value }) {
    if (this.element.dataset.value !== value) {
      this.checkTarget.classList.toggle("invisible", true);
    }
  }
}
