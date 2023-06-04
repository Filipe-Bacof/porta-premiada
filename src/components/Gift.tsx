export default function Gift() {
  return (
    <div className="relative flex w-[200px] flex-col items-center">
      <div className="h-[25px] w-[100px] bg-lime-matte"></div>
      <div className="h-[60px] w-[90px] bg-lime-moss"></div>
      <div className="absolute h-[85px] w-[15px] bg-red-600"></div>
      <div className="absolute top-10 h-[15px] w-[90px] bg-red-600"></div>
    </div>
  )
}
