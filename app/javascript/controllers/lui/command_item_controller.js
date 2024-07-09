import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="lui--command-item"
export default class extends Controller {
  static targets = ["check"];

  connect() {
    document.addEventListener(
      "phlexui--command-item-clicked",
      (e) => {
        this.uncheck(e.detail);
      },
      false,
    );
  }

  teste() {
    // console.log(e.target);

    this.checkTarget.classList.toggle("invisible", false);

    const { value } = this.element.dataset;

    const event = new CustomEvent("phlexui--command-item-clicked", { detail: value });

    document.dispatchEvent(event);

    // console.log(e.target);
    // console.log("element");
    // console.log(this.element.dataset.value);

    // elements.forEach((el) => el.classList.toggle("hidden", !isVisible));
  }

  disconnect() {
    document.removeEventListener(
      "phlexui--command-item-clicked",
      (e) => {
        this.uncheck(e.detail);
      },
      false,
    );
  }

  uncheck(value) {
    if (this.element.dataset.value !== value) {
      this.checkTarget.classList.toggle("invisible", true);
    }
  }
}
