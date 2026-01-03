import type { Metadata } from 'next'

import Hero from '@/components/sections/home/Hero'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Home',
}

export default function HomePage() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
    </>
  )
}
