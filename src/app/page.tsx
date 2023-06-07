'use client'

import Door from '@/components/Door'
import { createDoors, updateDoors } from '@/functions/doors'
import { useState } from 'react'

export default function Home() {
  const [doors, setDoors] = useState(createDoors(3, 2))

  function renderDoors() {
    return doors.map((door) => {
      return (
        <Door
          key={door.doorNumber}
          value={door}
          onChange={(newDoor) => {
            setDoors(updateDoors(doors, newDoor))
          }}
        />
      )
    })
  }

  return <main className="flex">{renderDoors()}</main>
}
