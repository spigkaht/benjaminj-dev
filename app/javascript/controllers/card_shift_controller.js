import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["image"]

  connect() {
    this.activeIndex = 0
    this.showImage(this.activeIndex)
  }

  leftShift() {
    this.activeIndex = (this.activeIndex - 1 + this.imageTargets.length) % this.imageTargets.length
    this.showImage(this.activeIndex)
  }

  rightShift() {
    this.activeIndex = (this.activeIndex + 1) % this.imageTargets.length
    this.showImage(this.activeIndex)
  }

  showImage(index) {
    this.imageTargets.forEach((image, i) => {
      if (i === index) {
        image.classList.remove("hidden")
        image.classList.add("block")
      } else {
        image.classList.remove("block")
        image.classList.add("hidden")
      }
    })
  }
}
