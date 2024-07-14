import { Controller } from "@hotwired/stimulus";

import { POPOVER_TOGGLE } from "./combobox_controller";


export default class extends Controller {
  // static targets = ["check"];

  connect() {
    console.log("lui--combobox-search-input connected");
    document.addEventListener(POPOVER_TOGGLE, (event) => this.handlePopoverToggle(event), false);
  }


  disconnect() {
    document.removeEventListener(POPOVER_TOGGLE, (event) => this.handlePopoverToggle(event), false);
  }

  handlePopoverToggle(event) {
    console.log(event.detail.closed);
    // this.searchTarget.value = "";
    // if (this.closedValue === false) this.searchTarget.focus();
  }
}
