'use client'

import Door from '@/components/Door'
import { createDoors } from '@/functions/doors'
import DoorModel from '@/model/door'
import { useState } from 'react'

export default function Home() {
  const [p1, setP1] = useState(new DoorModel(1))
  const [p2, setP2] = useState(new DoorModel(2))
  const [p3, setP3] = useState(new DoorModel(3))

  console.log(createDoors(3, 2))

  return (
    <main className="flex">
      <Door value={p1} onChange={(newDoor) => setP1(newDoor)} />
      <Door value={p2} onChange={(newDoor) => setP2(newDoor)} />
      <Door value={p3} onChange={(newDoor) => setP3(newDoor)} />
    </main>
  )
}
