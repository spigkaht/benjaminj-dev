import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["open", "close", "mainDiv", "menuContainer"]

  connect() {
    console.log("connected!");
  }

  menuOpen() {
    this.openTarget.classList.add("hidden-flip-left");
    this.closeTarget.classList.add("block-flip-right");
    this.openTarget.classList.remove("block-flip-right");
    this.closeTarget.classList.remove("hidden-flip-left");
    this.mainDivTarget.classList.add("hidden");
    this.mainDivTarget.classList.remove("block");
    this.menuContainerTarget.classList.add("block");
    this.menuContainerTarget.classList.remove("hidden");
  }

  menuClose() {
    this.closeTarget.classList.add("hidden-flip-left");
    this.closeTarget.classList.remove("block-flip-right");
    this.openTarget.classList.remove("hidden-flip-left");
    this.openTarget.classList.add("block-flip-right");
    this.mainDivTarget.classList.remove("hidden");
    this.mainDivTarget.classList.add("block");
    this.menuContainerTarget.classList.add("hidden");
    this.menuContainerTarget.classList.remove("block");
  }
}
