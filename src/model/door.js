export default class Door {
  #doorNumber
  #hasGift
  #selected
  #opened

  constructor(doorNumber, hasGift = false, selected = false, opened = false) {
    this.#doorNumber = doorNumber
    this.#hasGift = hasGift
    this.#selected = selected
    this.#opened = opened
  }

  get doorNumber() {
    return this.#doorNumber
  }

  get hasGift() {
    return this.#hasGift
  }

  get selected() {
    return this.#selected
  }

  get opened() {
    return this.#opened
  }

  desselect() {
    const selected = false
    return new Door(this.doorNumber, this.hasGift, selected, this.opened)
  }

  alterSelection() {
    const selected = !this.selected
    return new Door(this.doorNumber, this.hasGift, selected, this.opened)
  }

  openDoor() {
    const opened = true
    return new Door(this.doorNumber, this.hasGift, this.selected, opened)
  }
}
