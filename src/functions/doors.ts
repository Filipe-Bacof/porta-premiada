import DoorModel from '@/model/door'

export function createDoors(amount: number, selected: number): DoorModel[] {
  return Array.from({ length: amount }, (_, i) => {
    const num = i + 1
    const hasGift = num === selected
    return new DoorModel(num, hasGift)
  })
}
