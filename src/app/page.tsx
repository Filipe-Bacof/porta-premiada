import Card from '@/components/Card'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="m-[3px] flex h-[100vh] items-center justify-center p-5 text-[3rem]">
      <div className="">
        <Card bgcolor="bg-btn">
          <h1 className="h-[300px] w-[300px] cursor-default pt-[120px] text-center">
            Monty Hall
          </h1>
        </Card>
        <Card></Card>
      </div>
      <div className="">
        <Card></Card>
        <Card bgcolor="bg-grass-green">
          <Link href={`/game/3/2`}>
            <h2 className="h-[300px] w-[300px] pt-[120px] text-center">
              Iniciar
            </h2>
          </Link>
        </Card>
      </div>
    </main>
  )
}
