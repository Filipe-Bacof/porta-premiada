import DoorModel from '@/model/door'

export function createDoors(amount: number, doorWithGift: number): DoorModel[] {
  return Array.from({ length: amount }, (_, i) => {
    const num = i + 1
    const hasGift = num === doorWithGift
    return new DoorModel(num, hasGift)
  })
}

export function updateDoors(
  doors: DoorModel[],
  modifiedDoor: DoorModel,
): DoorModel[] {
  return doors.map((actualDoor) => {
    const sameAsModifiedDoor = actualDoor.doorNumber === modifiedDoor.doorNumber

    if (sameAsModifiedDoor) {
      return modifiedDoor
    } else {
      return modifiedDoor.opened ? actualDoor : actualDoor.desselect()
    }
  })
}
