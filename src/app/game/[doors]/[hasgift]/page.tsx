/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { createDoors, updateDoors } from '@/functions/doors'
import Door from '@/components/Door'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import DoorModel from '@/model/door'
import { usePathname } from 'next/navigation'

export default function Game() {
  const [isValid, setIsValid] = useState(false)
  const [doors, setDoors] = useState<DoorModel[]>([])
  const pathname = usePathname()

  useEffect(() => {
    const pathPieces = pathname.split('/')
    const doorsCount = Number(pathPieces[2])
    const hasGift = Number(pathPieces[3])
    const validDoors = doorsCount >= 2 && doorsCount <= 30
    const hasValidGify = hasGift >= 1 && hasGift <= doorsCount
    setIsValid(validDoors && hasValidGify)
  }, [doors, pathname])

  useEffect(() => {
    const pathPieces = pathname.split('/')
    const doorsCount = Number(pathPieces[2])
    const hasGift = Number(pathPieces[3])
    setDoors(createDoors(doorsCount, hasGift))
  }, [pathname])

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
        {isValid ? (
          renderDoors()
        ) : (
          <h2 className="text-[4rem]">Valores Inválidos</h2>
        )}
      </div>
      <div className="mt-[40px] flex justify-center">
        <Link href="/">
          <button className="border-none bg-btn px-[25px] py-[10px] text-[2rem] text-white hover:bg-red-800">
            Reiniciar Jogo
          </button>
        </Link>
      </div>
    </div>
  )
}
