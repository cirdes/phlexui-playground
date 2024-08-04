import { Controller } from "@hotwired/stimulus";
// import { ITEM_KEY_UP, ITEM_KEY_DOWN, ITEM_KEY_ENTER } from "./combobox_content_controller";

export const ITEM_SELECTED = "rbui--select-item#selected";
// const ITEM_MOUSEENTER = "rbui--combobox-item#mouseenter";

export default class extends Controller {
  connect() {
    this.element.parentElement.addEventListener("click", (e) => this.handleSelectItem(e), false);
  }


  disconnect() {
    this.element.parentElement.removeEventListener("click", (e) => this.handleSelectItem(e), false);
  }

  handleSelectItem({ target }) {
    if (this.element.dataset.value == target.dataset.value) {
      this.element.setAttribute("aria-selected", true);
    } else {
      this.element.removeAttribute("aria-selected");
    }
  }
}
