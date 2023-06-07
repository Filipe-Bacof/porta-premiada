/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { createDoors, updateDoors } from '@/functions/doors'
import Door from '@/components/Door'
import { useState } from 'react'

export default function game() {
  const [doors, setDoors] = useState(createDoors(4, 3))

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

  return (
    <div className="flex h-[100vh] flex-col items-center justify-center">
      <div className="flex flex-wrap justify-around self-stretch">
        {renderDoors()}
      </div>
      <div className=""></div>
    </div>
  )
}
