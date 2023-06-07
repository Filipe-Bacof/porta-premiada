import DoorModel from '@/model/door'
import Gift from './Gift'

type DoorProps = {
  value: DoorModel
  onChange: (newDoor: DoorModel) => void
}

export default function Door(props: DoorProps) {
  const door = props.value

  const alterSelection = () => props.onChange(door.alterSelection())
  const openDoor = (e: any) => {
    e.stopPropagation()
    props.onChange(door.openDoor())
  }

  function renderDoor() {
    return (
      <div className="flex grow flex-col items-center bg-orange-600 p-[15px]">
        <div
          className={`cursor-default text-5xl ${
            door.selected && !door.opened && 'text-yellow-400'
          }`}
        >
          {door.doorNumber}
        </div>

        <div
          className={`absolute top-[140px] flex h-5 w-5 cursor-pointer self-start rounded-full ${
            door.selected && !door.opened ? 'bg-yellow-400' : 'bg-amber-900'
          }`}
          onClick={openDoor}
        ></div>
      </div>
    )
  }

  return (
    <div
      className="relative m-[5px] flex h-door-hei w-door-wid flex-col items-center"
      onClick={alterSelection}
    >
      <div
        className={`flex w-[90%] grow flex-col-reverse border-l-[5px] border-r-[5px] border-t-[5px] bg-[#0005] ${
          door.selected && !door.opened
            ? 'border-yellow-400'
            : 'border-amber-800'
        }`}
      >
        {door.closed ? renderDoor() : door.hasGift ? <Gift /> : false}
      </div>
      <div className="h-[10px] w-full bg-slate-300"></div>
    </div>
  )
}
