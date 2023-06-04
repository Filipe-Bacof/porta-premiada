type Props = {}

export default function Door({}: Props) {
  return (
    <div className="relative m-[5px] flex h-door-hei w-door-wid flex-col items-center">
      <div className="flex w-[90%] grow border-l-[5px] border-r-[5px] border-t-[5px] border-amber-800">
        <div className="flex grow flex-col items-center bg-orange-600 p-[15px]">
          <div className="text-5xl">3</div>

          <div className="absolute top-[140px] flex h-5 w-5 self-start rounded-full bg-amber-900"></div>
        </div>
      </div>
      <div className="h-[10px] w-full bg-slate-300"></div>
    </div>
  )
}
