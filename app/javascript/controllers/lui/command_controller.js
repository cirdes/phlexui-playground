import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="combobox"
export default class extends Controller {
  // static targets = ["input", "group", , "empty"];
  static targets = ["input", "item", "group", "empty"];

  connect() {
    console.log("lui--command");
    this.inputTarget.focus();
    this.toggleVisibility(this.emptyTargets, false);
    // this.selectedIndex = -1;
  }

  filter(e) {
    console.log("filter");
    console.log(e);
    // Deselect any previously selected item
    // this.deselectAll();

    const query = e.target.value.toLowerCase();

    this.toggleVisibility(this.itemTargets, false);

    const visibleItems = this.filterItems(query);
    this.toggleVisibility(visibleItems, true);

    this.toggleVisibility(this.emptyTargets, visibleItems.length === 0);

    this.updateGroupVisibility();
  }

  filterItems(query) {
    const parsedQuery = this.sanitizeString(query);
    return this.itemTargets.filter((item) => this.sanitizeString(item.innerText).includes(parsedQuery));
  }

  toggleVisibility(elements, isVisible) {
    elements.forEach((el) => el.classList.toggle("hidden", !isVisible));
  }

  updateGroupVisibility() {
    this.groupTargets.forEach((group) => {
      const hasVisibleItems = group.querySelectorAll("[data-lui--command-target='item']:not(.hidden)").length > 0;
      this.toggleVisibility([group], hasVisibleItems);
    });
  }

  resetVisibility() {
    this.toggleVisibility(this.itemTargets, true);
    this.toggleVisibility(this.groupTargets, true);
    this.toggleVisibility(this.emptyTargets, false);
  }

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

  // deselectAll() {
  //   this.itemTargets.forEach((item) => this.toggleAriaSelected(item, false));
  //   this.selectedIndex = -1;
  // }

  sanitizeString(str) {
    return str.toLowerCase().trim();
  }
}
