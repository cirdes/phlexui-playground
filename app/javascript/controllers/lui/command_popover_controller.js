import { Controller } from "@hotwired/stimulus";
import { computePosition } from "@floating-ui/dom";

// Connects to data-controller="lui--command-item"
export default class extends Controller {
  static targets = ["button", "tooltip", "content"];

  connect() {
    console.log("command_popover");

    computePosition(this.buttonTarget, this.tooltipTarget).then(({ x, y }) => {
      Object.assign(this.tooltipTarget.style, {
        left: `${x}px`,
        top: `${y}px`,
      });
    });

    document.addEventListener(
      "phlexui--command-item-clicked",
      (e) => {
        this.itemSelected(e.detail);
      },
      false,
    );
  }

  teste() {
    console.log("clicked");

    this.tooltipTarget.classList.toggle("invisible");

    // const { value } = this.element.dataset;

    // const event = new CustomEvent("phlexui--command-item-clicked", { detail: value });

    // document.dispatchEvent(event);

    // console.log(e.target);
    // console.log("element");
    // console.log(this.element.dataset.value);

    // elements.forEach((el) => el.classList.toggle("hidden", !isVisible));
  }

  disconnect() {
    document.removeEventListener(
      "phlexui--command-item-clicked",
      (e) => {
        this.itemSelected(e.detail);
      },
      false,
    );
  }

  itemSelected(value) {
    this.buttonTarget.value = value;
    this.contentTarget.innerText = value;
    this.tooltipTarget.classList.toggle("invisible", true);
  }
}
