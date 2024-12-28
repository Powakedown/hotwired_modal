import { Controller } from "@hotwired/stimulus"
import * as bootstrap from "bootstrap"

export default class extends Controller {
  connect() {
    console.log("Hello from modal_controller.js")
    this.modal = new bootstrap.Modal(this.element)
    this.modal.show()
  }

  open() {
    console.log("Hello open from modal_controller.js")
    if(!this.modal.isOpened) {
      this.modal.show()
    }
  }

  close() {
    console.log("Hello close from modal_controller.js")
    if(this.modal.isOpened && this.detail.success) {
      this.modal.hide()
    }
  }
}
