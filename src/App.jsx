import React from 'react'
import Navbar from './components/Navbar'
import { div } from 'framer-motion/client'

const App = () => {
  return (
    // <main className="overflow-x-hidden bg-block tracking-tighter text-gray-200 antialiased">
    //   <Navbar></Navbar>
    // </main>
    <div className="flex flex-col gap-10 overflow-x-hidden">
      <section className='grid grid-cols-3 p-10 gap-10'>
        <div className="bg-slate-800 aspect rounded-lg justify-center flex items-center gap-10"></div>
        <div className="bg-slate-800 aspect rounded-lg justify-center flex items-center gap-10"></div>
        <div className="bg-slate-800 aspect rounded-lg justify-center flex items-center gap-10"></div>
        <div className="bg-slate-800 aspect rounded-lg justify-center flex items-center gap-10"></div>
        <div className="bg-slate-800 aspect rounded-lg justify-center flex items-center gap-10"></div>
        <div className="bg-slate-800 aspect rounded-lg justify-center flex items-center gap-10"></div>
      </section>
    </div>
  )
}

export default App