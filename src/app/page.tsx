import Door from '@/components/Door'

export default function Home() {
  return (
    <main className="flex">
      <Door selected={true} />
      <Door selected={false} />
    </main>
  )
}
