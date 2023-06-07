type InputNumberPros = {
  text: string
  value: number
  onChange: (newValue: number) => void
}

export default function InputNumber(props: InputNumberPros) {
  const decrement = () => {
    props.onChange(props.value - 1)
  }
  const increment = () => {
    props.onChange(props.value + 1)
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-center text-black">
      <span className="text-[1.5rem] text-gray-600">{props.text}</span>
      <span className="text-[6rem]">{props.value}</span>
      <div className="flex">
        <button
          className="m-[5px] flex h-[80px] w-[80px] items-center justify-center border-none bg-slate-200 font-[3rem]"
          onClick={decrement}
        >
          -
        </button>
        <button
          className="m-[5px] flex h-[80px] w-[80px] items-center justify-center border-none bg-slate-200 font-[3rem]"
          onClick={increment}
        >
          +
        </button>
      </div>
    </div>
  )
}
