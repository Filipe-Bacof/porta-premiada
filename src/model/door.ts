export default class DoorModel {
  #doorNumber: number
  #hasGift: boolean
  #selected: boolean
  #opened: boolean

  constructor(
    doorNumber: number,
    hasGift = false,
    selected = false,
    opened = false,
  ) {
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

  get closed() {
    return !this.#opened
  }

  desselect() {
    const selected = false
    return new DoorModel(this.doorNumber, this.hasGift, selected, this.opened)
  }

  alterSelection() {
    const selected = !this.selected
    return new DoorModel(this.doorNumber, this.hasGift, selected, this.opened)
  }

  openDoor() {
    const opened = true
    return new DoorModel(this.doorNumber, this.hasGift, this.selected, opened)
  }
}
