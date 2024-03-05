import { useLayoutEffect, useRef } from 'react'
import './App.css'
import gsap from "gsap"

function App() {
 const comp = useRef(null)
useLayoutEffect(()=>{
  let ctx = gsap.context(()=>{
    let t1 = gsap.timeline()
    t1.from("#intro-sider",{
      yPercent: "-100",
      duration: 0.5,
      delay: 0.4,
      stagger: 0.5
    }).to("#intro-sider",{
      opacity: 0,
      delay: 4,
      y: "+=60"
    }).from("#welcome",{
      opacity: 0,
      x: "-30",
      duration: 1.5
    })
  },comp)

  return ()=> ctx.revert()
},[])
  return (
    <>
      <div ref={comp} className='relative bg-white '>
    <div id='intro-sider' className="flex flex-col gap-4 w-[96rem] h-screen bg-gray-50  p-10 left-0 top-0 absolute z-10  tracking-tight pt-10 pl-10">
  <div className="skeleton h-32 w-full bg-gray-200"></div>
  <div className="skeleton h-4 w-28 bg-gray-200"></div>
  <div className="skeleton h-4 w-full bg-gray-200"></div>
  <div className="skeleton h-4 w-full bg-gray-200"></div>
</div>
<div id='welcome' className="h-screen flex bg-cyan-300 place-items-center justify-center">
  <h1  className='text-black text-9xl '>Hello World</h1>
</div>
      </div>
    </>
  )
}

export default App
