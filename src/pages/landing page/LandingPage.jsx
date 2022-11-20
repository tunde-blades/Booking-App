import React from 'react'
import Header from '../../layouts/header/Header'
import image1 from '../../assets/images/landingimage.png'

export default function LandingPage() {
  return (
    <div>
      <Header/>
      <section className='flex justify-between py-3'>
          <div className='bg-blue-300 min-w-'>
            ggg
          </div>
          <picture className='min-w-sm max-w-lg'>
            <img src={image1} alt="" />
          </picture>
      </section>
    </div>
  )
}
