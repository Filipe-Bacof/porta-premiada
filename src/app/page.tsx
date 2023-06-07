'use client'

import Door from '@/components/Door'
import DoorModel from '@/model/door'
import { useState } from 'react'

export default function Home() {
  const [p1, setP1] = useState(new DoorModel(1))
  const [text, setText] = useState('...')

  return (
    <main className="flex flex-col">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Door value={p1} onChange={(newDoor) => setP1(newDoor)} />
    </main>
  )
}
