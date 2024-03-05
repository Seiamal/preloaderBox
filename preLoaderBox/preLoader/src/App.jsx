import { useRef } from 'react'
import './App.css'
import { useLayoutEffect } from 'react'
import gsap from "gsap"
function App() {

  const comp = useRef(null)
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let t1 = gsap.timeline()
      t1.from("#intro-slider", {
        yPercent: "-100",
        duration: 0.5,
        delay: 1.3,
      }).from(['#title-1', '#title-2', '#title-3'], {
        opacity: 0,
        y: "+=30",
        stagger: 0.5,
      }).to(['#title-1', '#title-2', '#title-3'], {
        opacity: 0,
        x: "+=30",
        stagger: 0.4,
        delay: 0.3,
      }).to("#intro-slider",{
        yPercent: "+100",
        duration: 1.3,
      }).from("#welcome",{
        opacity: 0,
        duration: 1.5
      })
    }, comp)

    return () => ctx.revert()
  }, [])
  return (
    <>
      <div className='relative' ref={comp}>
        <div id='intro-slider' className='h-screen bg-cyan-300 font-spaceGrotesk p10 left-0 top-0 absolute z-10 flex flex-col w-full gap-10 tracking-tight pt-10 pl-10'>
          <h1 id='title-1' className='text-9xl'>WEB DEVELOPR</h1>
          <h1 id='title-2' className='text-8xl'>UI/UX </h1>
          <h1 id='title-2' className='text-7xl'>APP </h1>
        </div>

        <div className='h-screen flex bg-gray-950 place-items-center justify-center'>
          <div id='welcome' className='text-9xl text-gray-50 font-semibold flex gap-7 font-spaceGrotesk'>Welcome <span className='text-pink-600'>Monzil</span>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
