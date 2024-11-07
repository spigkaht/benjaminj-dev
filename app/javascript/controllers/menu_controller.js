import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["open", "close"]

  connect() {
    console.log("connected!");
  }

  menuOpen() {
    console.log("opening menu!");
    this.openTarget.classList.add("hidden");
    this.closeTarget.classList.add("block");
    this.openTarget.classList.remove("block");
    this.closeTarget.classList.remove("hidden");
  }

  menuClose() {
    console.log("closing menu!");
    this.closeTarget.classList.add("hidden");
    this.openTarget.classList.add("block");
    this.closeTarget.classList.remove("block");
    this.openTarget.classList.remove("hidden");
  }
}
