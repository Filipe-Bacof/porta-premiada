'use client'

import Door from '@/components/Door'
import DoorModel from '@/model/door'
import { useState } from 'react'

export default function Home() {
  const [p1, setP1] = useState(new DoorModel(1))

  return (
    <main className="flex">
      <Door door={p1} />
    </main>
  )
}
