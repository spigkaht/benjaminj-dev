import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    this.updateHeight() // Set initial height
    window.addEventListener("resize", this.updateHeight.bind(this)) // Update on resize
  }

  disconnect() {
    window.removeEventListener("resize", this.updateHeight.bind(this))
  }

  updateHeight() {
    this.element.style.height = `${document.body.scrollHeight}px`
  }
}
