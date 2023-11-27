'use client'

import { BackgroundNumbers, Navbar, Homepage, Stack, Experience, Projects, Contact } from '../components' 

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center">
      <BackgroundNumbers />
      <Navbar />
      <Homepage />
      <Stack />
      <Experience />
      <Projects />
      <Contact />
    </main>
  )
}
