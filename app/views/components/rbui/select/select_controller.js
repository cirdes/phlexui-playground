import { Controller } from "@hotwired/stimulus";
import { computePosition, autoUpdate, offset } from "@floating-ui/dom";
// import { ITEM_SELECTED } from "./combobox_item_controller";
// import { ITEM_KEY_ESC } from "./combobox_content_controller";

// export const POPOVER_OPENED = "rbui--combobox#popoverOpened";

export default class extends Controller {
  static targets = ["trigger", "content", "input", "value"];
  // static values = { closed: Boolean }

  constructor(...args) {
    super(...args);
    this.cleanup;
  }

  connect() {
    this.setFloatingElement();

    // document.addEventListener(ITEM_SELECTED, (e) => this.itemSelected(e.detail), false);
    // document.addEventListener(ITEM_KEY_ESC, () => this.toogleContent(), false);
  }

  disconnect() {
    // document.removeEventListener(ITEM_SELECTED, (e) => this.itemSelected(e.detail), false);
    // document.removeEventListener(ITEM_KEY_ESC, () => this.toogleContent(), false);
    this.cleanup();
  }

  selectItem(event) {
    this.inputTarget.value = event.target.dataset.value;
    this.valueTarget.innerText = event.target.innerText;
    this.contentTarget.classList.toggle("hidden");
  }

  onClick() {
    this.contentTarget.classList.toggle("hidden");
    // this.toogleContent();
  }

  // clickOutside(event) {
  //   if (this.closedValue) return;
  //   if (this.element.contains(event.target)) return;

  //   event.preventDefault();
  //   this.toogleContent();
  // }

  // itemSelected({ value, label }) {
  //   this.triggerTarget.value = value;
  //   this.contentTarget.innerText = label;
  //   this.toogleContent();
  // }

  toogleContent() {
    // this.closedValue = !this.closedValue;

    this.contentTarget.classList.toggle("hidden");
    // this.triggerTarget.setAttribute("aria-expanded", !this.closedValue);

    // if (!this.closedValue) {
    //   const event = new CustomEvent(POPOVER_OPENED, { detail: { closed: this.closedValue } });
    //   document.dispatchEvent(event);
    // }
  }

  setFloatingElement() {
    this.cleanup = autoUpdate(this.triggerTarget, this.contentTarget, () => {
      computePosition(this.triggerTarget, this.contentTarget, { middleware: [offset(4)] }).then(({ x, y }) => {
        Object.assign(this.contentTarget.style, {
          left: `${x}px`,
          top: `${y}px`,
        });
      });
    });
  }
}
