import { ReactNode } from 'react'

type CardProps = {
  bgcolor?: string
  children?: ReactNode
}

export default function Card(props: CardProps) {
  return (
    <div
      className={`flex h-[300px] w-[300px] text-white ${
        props.bgcolor ? props.bgcolor : 'bg-white'
      }`}
    >
      {props.children}
    </div>
  )
}
