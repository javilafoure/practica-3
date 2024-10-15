import Link from 'next/link'
import React from 'react'

function NavBar() {
    return (
        <nav className="flex justify-center px-8 h-24 items-center bg-white text-black">
            <div className='flex align-center items-center justify-between gap-14'>
                <figure>
                    
                </figure>
                <ul className="flex gap-8">
                    <li>
                        <Link href={'/'}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href={'/services'}>
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href={'/details'}>
                            Details
                        </Link>
                    </li>
                    <li>
                        <Link href={'/features'}>
                            Features
                        </Link>
                    </li>
                    <li>
                        <Link href={'/projects'}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href={'/team'}>
                            Team
                        </Link>
                    </li>
                    <li>
                        <Link href={'/testimonial'}>
                            Testimonial
                        </Link>
                    </li>
                    <li>
                        <Link href={'/blog'}>
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link href={'/contact'}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
