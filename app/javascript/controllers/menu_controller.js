import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["open", "close", "indexContainer", "menuContainer"]

  connect() {
    console.log("connected!");
  }

  menuOpen() {
    console.log("opening menu!");
    this.openTarget.classList.add("hidden-flip-left");
    this.closeTarget.classList.add("block-flip-right");
    this.openTarget.classList.remove("block-flip-right");
    this.closeTarget.classList.remove("hidden-flip-left");
    this.indexContainerTarget.classList.add("hidden");
    this.indexContainerTarget.classList.remove("block");
    this.menuContainerTarget.classList.remove("hidden");
    this.menuContainerTarget.classList.add("block");
  }

  menuClose() {
    console.log("closing menu!");
    this.closeTarget.classList.add("hidden-flip-left");
    this.openTarget.classList.add("block-flip-right");
    this.closeTarget.classList.remove("block-flip-right");
    this.openTarget.classList.remove("hidden-flip-left");
    this.indexContainerTarget.classList.remove("hidden");
    this.indexContainerTarget.classList.add("block");
    this.menuContainerTarget.classList.add("hidden");
    this.menuContainerTarget.classList.remove("block");
  }
}
