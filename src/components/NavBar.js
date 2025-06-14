'use client'
import { useState } from 'react'
import Link from 'next/link'
import { HiMenu, HiX } from 'react-icons/hi'

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleProject = () => {
        sessionStorage.setItem('scrollTo', 'projects');
    };

    return (
        <nav className="flex fixed top-0 justify-between p-4 px-8 md:px-16 w-full z-50 text-xl text-white bg-[#c87377] items-stretch">
            <div>
                <Link href="/" className='font-bold'>Alana Koshikawa</Link>
            </div>

            {/* Desktop View */}
            <div className='hidden md:flex gap-6 font-semibold'>
                <Link href="/">Home</Link>
                <Link href="/#about">About</Link>
                <Link href="/#projects" onClick={handleProject}>Projects</Link>
            </div>

            {/* Hamburger Menu Button */}
            <div className='md:hidden'>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                </button>
            </div>

            {/* Mobile View */}
            {isOpen && (
                <>
                    {/* Dark Overlay */}
                    <div className='fixed top-16 inset-0 bg-black/40 z-40' onClick={() => setIsOpen(false)}></div>
                    <div className='md:hidden absolute left-0 mt-11.5 w-full bg-[#c87377] transition-all duration-300 z-50'>
                        <div className='h-[2px] bg-white'/>
                        <div className='flex flex-col p-4 ml-4 gap-4 font-semibold'>
                            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                            <Link href="/#about" onClick={() => setIsOpen(false)}>About</Link>
                            <Link href="/#projects" onClick={() => {setIsOpen(false); handleProject();}}>Projects</Link>
                        </div>
                    </div>
                </>
            )}
        </nav>
    );
    
}
