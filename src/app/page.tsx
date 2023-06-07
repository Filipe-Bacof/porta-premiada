'use client'

import Card from '@/components/Card'
import Link from 'next/link'
import InputNumber from '@/components/InputNumber'
import { useState } from 'react'

export default function Home() {
  const [doors, setDoors] = useState(3)
  const [withGift, setWithGift] = useState(1)

  return (
    <main className="flex flex-col items-center justify-center p-5 text-[3rem] md:mt-8">
      <div className="m-[3px] flex flex-col gap-[6px] md:flex-row">
        <Card bgcolor="bg-btn">
          <h1 className="h-[300px] w-[300px] cursor-default pt-[120px] text-center">
            Monty Hall
          </h1>
        </Card>
        <Card>
          <InputNumber
            text="Quantidade de Portas?"
            value={doors}
            onChange={(newNumber: number) => setDoors(newNumber)}
          />
        </Card>
      </div>
      <div className="m-[3px] flex flex-col gap-[6px] md:flex-row">
        <Card>
          <InputNumber
            text="Porta Premiada?"
            value={withGift}
            onChange={(newNumber: number) => setWithGift(newNumber)}
          />
        </Card>
        <Card bgcolor="bg-grass-green">
          <Link href={`/game/${doors}/${withGift}`}>
            <h2 className="h-[300px] w-[300px] pt-[120px] text-center">
              Iniciar
            </h2>
          </Link>
        </Card>
      </div>
      <Link href={'/about'}>
        <h2 className="h-[300px] w-[300px] pt-[120px] text-center text-[2rem] text-blue-600 underline md:pt-[32px]">
          O que é Monty Hall
        </h2>
      </Link>
    </main>
  )
}
