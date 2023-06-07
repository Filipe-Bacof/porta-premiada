import DoorModel from '@/model/door'

type DoorProps = {
  value: DoorModel
  onChange: (newDoor: DoorModel) => void
}

export default function Door(props: DoorProps) {
  const door = props.value

  const alterSelection = () => props.onChange(door.alterSelection())

  return (
    <div
      className="relative m-[5px] flex h-door-hei w-door-wid flex-col items-center"
      onClick={alterSelection}
    >
      <div
        className={`flex w-[90%] grow border-l-[5px] border-r-[5px] border-t-[5px] ${
          door.selected ? 'border-yellow-400' : 'border-amber-800'
        }`}
      >
        <div className="flex grow flex-col items-center bg-orange-600 p-[15px]">
          <div className={`text-5xl ${door.selected && 'text-yellow-400'}`}>
            {door.doorNumber}
          </div>

          <div
            className={`absolute top-[140px] flex h-5 w-5 self-start rounded-full ${
              door.selected ? 'bg-yellow-400' : 'bg-amber-900'
            }`}
          ></div>
        </div>
      </div>
      <div className="h-[10px] w-full bg-slate-300"></div>
    </div>
  )
}
