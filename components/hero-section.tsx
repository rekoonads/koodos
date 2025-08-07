import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative h-96 overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/placeholder.svg?height=400&width=800" alt="Superman" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-orange-500/60 to-blue-500/60" />
      </div>

      <div className="relative z-10 flex items-center justify-center h-full px-8">
        <div className="text-center text-white max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Superman Review: The Man of Steel Gets His Shine Back</h1>
          <p className="text-lg md:text-xl opacity-90">
            DC finally stops trying to be edgy and remembers why Superman works.
          </p>
        </div>
      </div>
    </section>
  )
}
