import { Controller } from "@hotwired/stimulus";
import { computePosition, autoUpdate, offset } from "@floating-ui/dom";

export default class extends Controller {
  static targets = ["trigger", "content", "input", "value", "item"];
  static values = { open: Boolean }

  constructor(...args) {
    super(...args);
    this.cleanup;
  }

  connect() {
    this.setFloatingElement();
    this.generateItemsIds();
  }

  disconnect() {
    this.cleanup();
  }

  selectItem(event) {
    event.preventDefault();

    this.inputTarget.value = event.target.dataset.value;
    this.valueTarget.innerText = event.target.innerText;

    this.closeContent();
  }

  onClick() {
    this.toogleContent();

    if (this.openValue) {
      this.setFocusAndCurrent();
    } else {
      this.resetCurrent();
    }
  }

  handleKeyDown() {
    const currentIndex = this.itemTargets.findIndex((item) => item.getAttribute("aria-current") === "true");

    if (currentIndex + 1 < this.itemTargets.length) {
      this.itemTargets[currentIndex].removeAttribute("aria-current");

      const currentItem = this.itemTargets[currentIndex + 1];
      currentItem.focus();
      currentItem.setAttribute("aria-current", "true");
      this.triggerTarget.setAttribute("aria-activedescendant", currentItem.getAttribute("id"));
    }
  }

  handleKeyUp() {
    const currentIndex = this.itemTargets.findIndex((item) => item.getAttribute("aria-current") === "true");

    if (currentIndex > 0) {
      this.itemTargets[currentIndex].removeAttribute("aria-current");

      const currentItem = this.itemTargets[currentIndex - 1];
      currentItem.focus();
      currentItem.setAttribute("aria-current", "true");
      this.triggerTarget.setAttribute("aria-activedescendant", currentItem.getAttribute("id"));
    }
  }

  handleEsc(event) {
    event.preventDefault();
    this.closeContent();
  }


  setFocusAndCurrent() {
    const selectedItem = this.itemTargets.find((item) => item.getAttribute("aria-selected") === "true");

    if (selectedItem) {
      selectedItem.focus();
      selectedItem.setAttribute("aria-current", "true");
      this.triggerTarget.setAttribute("aria-activedescendant", selectedItem.getAttribute("id"));
    } else {
      this.itemTarget.focus();
      this.itemTarget.setAttribute("aria-current", "true");
      this.triggerTarget.setAttribute("aria-activedescendant", this.itemTarget.getAttribute("id"));
    }
  }

  resetCurrent() {
    this.itemTargets.forEach((item) => item.removeAttribute("aria-current"));
  }

  clickOutside(event) {
    if (!this.openValue) return;
    if (this.element.contains(event.target)) return;

    event.preventDefault();
    this.toogleContent();
  }

  toogleContent() {
    this.openValue = !this.openValue;
    this.contentTarget.classList.toggle("hidden");
    this.triggerTarget.setAttribute("aria-expanded", this.openValue);
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

  generateItemsIds() {
    const contentId = this.contentTarget.getAttribute("id");
    this.triggerTarget.setAttribute("aria-controls", contentId);

    this.itemTargets.forEach((item, index) => {
      item.id = `${contentId}-${index}`;
    });
  }

  closeContent() {
    this.toogleContent();
    this.resetCurrent();

    this.triggerTarget.setAttribute("aria-activedescendant", true);
    this.triggerTarget.focus();
  }
}
