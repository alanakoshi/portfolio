'use client'

import { useState } from 'react'
import Link from 'next/link'
import { HiMenu, HiX } from 'react-icons/hi'

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="flex justify-between p-4 w-full text-xl text-white bg-[#c87377]">
            <div>
                <Link href="#home" className='font-bold'>Alana Koshikawa</Link>
            </div>

            {/* Desktop View */}
            <div className='hidden md:flex gap-6'>
                <Link href="#home">Home</Link>
                <Link href="#about">About</Link>
                <Link href="#projects">Projects</Link>
            </div>

            {/* Hamburger Menu Button */}
            <div className='md:hidden'>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                </button>
            </div>

            {/* Mobile View */}
            {isOpen && (
                <div className='md:hidden absolute left-0 mt-12 w-full bg-[#c87377]'>
                    <div className='h-px bg-white blur'/>
                    <div className='flex flex-col p-4 gap-4'>
                        <Link href="#home" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link href="#about" onClick={() => setIsOpen(false)}>About</Link>
                        <Link href="#projects" onClick={() => setIsOpen(false)}>Projects</Link>
                    </div>
                </div>
            )}
        </nav>
    );
    
}
