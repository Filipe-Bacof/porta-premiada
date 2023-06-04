type Props = {
  selected: boolean
}

export default function Door({ selected }: Props) {
  return (
    <div className="relative m-[5px] flex h-door-hei w-door-wid flex-col items-center">
      <div
        className={`flex w-[90%] grow border-l-[5px] border-r-[5px] border-t-[5px] ${
          selected ? 'border-amber-800' : 'border-yellow-400'
        }`}
      >
        <div className="flex grow flex-col items-center bg-orange-600 p-[15px]">
          <div className={`text-5xl ${!selected && 'text-yellow-400'}`}>3</div>

          <div
            className={`absolute top-[140px] flex h-5 w-5 self-start rounded-full ${
              selected ? 'bg-amber-900' : 'bg-yellow-400'
            }`}
          ></div>
        </div>
      </div>
      <div className="h-[10px] w-full bg-slate-300"></div>
    </div>
  )
}
