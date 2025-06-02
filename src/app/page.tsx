
import React from 'react'
import About from './about/page'
import Team from './team/page'
import Contact from './contact/page'
import Detect from './detect/page'

export default function page() {
  return (
    <div className=' '>
      <Detect/>
      <About/>
      <Team/>
      <Contact/>
    </div>
  )
}
