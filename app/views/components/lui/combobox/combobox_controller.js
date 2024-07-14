import { Controller } from "@hotwired/stimulus";
import { computePosition } from "@floating-ui/dom";
import { ITEM_SELECTED } from "./combobox_item_controller";

export const POPOVER_TOGGLE = "phlexui--combobox#popoverToggle";

export default class extends Controller {
  static targets = ["input", "popover", "content", "search"];
  static values = { closed: Boolean }

  connect() {
    console.log("combobox controller connected");

    computePosition(this.inputTarget, this.popoverTarget).then(({ x, y }) => {
      Object.assign(this.popoverTarget.style, {
        left: `${x}px`,
        top: `${y}px`,
      });
    });

    document.addEventListener(ITEM_SELECTED, (e) => this.itemSelected(e.detail), false);
  }

  disconnect() {
    document.removeEventListener(ITEM_SELECTED, (e) => this.itemSelected(e.detail), false);
  }

  onClick() {
    this.toogleContent();
  }

  clickOutside(event) {
    if (this.closedValue) return;
    if (this.element.contains(event.target)) return;

    event.preventDefault();
    this.toogleContent();
  }

  itemSelected({ value, label }) {
    this.inputTarget.value = value;
    this.contentTarget.innerText = label;
    this.toogleContent();
  }


  toogleContent() {
    this.closedValue = !this.closedValue;

    this.popoverTarget.classList.toggle("invisible");
    this.inputTarget.setAttribute("aria-expanded", !this.closedValue);

    const event = new CustomEvent(POPOVER_TOGGLE, { detail: { closed: this.closedValue } });
    document.dispatchEvent(event);
  }
}
