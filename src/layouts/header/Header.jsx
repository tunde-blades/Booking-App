import React from 'react'
import logo from '../../assets/images/logo.svg'
import Loginbtn from '../../components/buttons/Loginbtn'
import SignUpbtn from '../../components/buttons/SignUpbtn'

export default function Header() {
  return (
    <section className=' flex  justify-center overflow-hidden border-b-2'>
        <header className='container box-border py-5 px-10'>
        <menu className='flex space-x-10 items-center justify-between'>
                <picture>
                    <img className='w-10' src={logo} alt="" />
                </picture>
                <nav className='flex space-x-5 text-gray-900'>
                    <li className='text-blue-800 cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>About us</li>
                    <li className='cursor-pointer'>Catalog</li>
                    <li className='cursor-pointer'>Author</li>
                    <li className='cursor-pointer'>Contact us</li>
                </nav>
                <button className='flex items-center space-x-3'>
                    <Loginbtn/>
                    <SignUpbtn/>
                </button>
            </menu>
        </header>
    </section>
  )
}
