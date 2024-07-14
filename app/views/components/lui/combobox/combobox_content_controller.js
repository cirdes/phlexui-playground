import { Controller } from "@hotwired/stimulus";

import { POPOVER_TOGGLE } from "./combobox_controller";

export default class extends Controller {
  static targets = ["item", "empty", "group", "search"];

  connect() {
    console.log("lui--combobox-content connected");
    document.addEventListener(POPOVER_TOGGLE, (event) => this.handlePopoverToggle(event), false);

    // this.toggleVisibility(this.emptyTargets, false);
    // this.inputTarget.focus();
    // this.selectedIndex = -1;
  }

  disconnect() {
    document.removeEventListener(POPOVER_TOGGLE, (event) => this.handlePopoverToggle(event), false);
  }

  handlePopoverToggle(event) {
    const { closed } = event.detail;
    this.searchTarget.value = "";
    if (!closed) {
      this.searchTarget.focus();
      this.toggleVisibility(this.itemTargets, true);
      this.toggleVisibility(this.groupTargets, true);
      this.toggleVisibility(this.emptyTargets, false);
    }
  }

  filter(event) {
    console.log("filter contetn");


    const query = this.sanitizeStr(event.target.value);
    console.log(query);

    this.toggleVisibility(this.itemTargets, false);

    const visibleItems = this.filterItems(query);
    this.toggleVisibility(visibleItems, true);

    this.toggleVisibility(this.emptyTargets, visibleItems.length === 0);

    this.updateGroupVisibility();
  }

  updateGroupVisibility() {
    this.groupTargets.forEach((group) => {
      const hasVisibleItems = group.querySelectorAll("[data-lui--combobox-content-target='item']:not(.hidden)").length > 0;
      this.toggleVisibility([group], hasVisibleItems);
    });
  }

  // resetVisibility() {

  // }

  // handleKeydown(e) {
  //   const visibleItems = this.itemTargets.filter((item) => !item.classList.contains("hidden"));
  //   if (e.key === "ArrowDown") {
  //     e.preventDefault();
  //     this.updateSelectedItem(visibleItems, 1);
  //   } else if (e.key === "ArrowUp") {
  //     e.preventDefault();
  //     this.updateSelectedItem(visibleItems, -1);
  //   } else if (e.key === "Enter" && this.selectedIndex !== -1) {
  //     e.preventDefault();
  //     visibleItems[this.selectedIndex].click();
  //   }
  // }

  // updateSelectedItem(visibleItems, direction) {
  //   if (this.selectedIndex >= 0) {
  //     this.toggleAriaSelected(visibleItems[this.selectedIndex], false);
  //   }

  //   this.selectedIndex += direction;

  //   // Ensure the selected index is within the bounds of the visible items
  //   if (this.selectedIndex < 0) {
  //     this.selectedIndex = visibleItems.length - 1;
  //   } else if (this.selectedIndex >= visibleItems.length) {
  //     this.selectedIndex = 0;
  //   }

  //   this.toggleAriaSelected(visibleItems[this.selectedIndex], true);
  // }

  // toggleAriaSelected(element, isSelected) {
  //   element.setAttribute("aria-selected", isSelected.toString());
  // }

  filterItems(query) {
    return this.itemTargets.filter((item) => this.sanitizeStr(item.innerText).includes(query));
  }

  toggleVisibility(elements, isVisible) {
    elements.forEach((el) => el.classList.toggle("hidden", !isVisible));
  }

  sanitizeStr(str) {
    return str.toLowerCase().trim();
  }
}