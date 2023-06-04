type Props = {}

export default function Door({}: Props) {
  return (
    <div className="flex h-door-hei w-door-wid">
      <div className="flex grow border-l-[5px] border-r-[5px] border-t-[5px] border-amber-900">
        <div className="flex grow flex-col items-center bg-orange-600 p-[15px]">
          <div className="text-5xl">3</div>
        </div>
      </div>
    </div>
  )
}
