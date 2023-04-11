import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header className="p-6 bg-header-color text-gray-100 flex justify-between ">
                <Link className="p-3" to='/tours'>ALL TOURS</Link>
                <div className="p-3 ml-10">LOGO</div>
                <nav>
                    <ul className="flex" >
                        <li className="p-3"><Link to="/login">LOG IN</Link></li>
                        <li className='p-3 w-29'>
                            <Link to="signup" className="p-3 border rounded-3xl text-center transition duration-500 ease-in-out hover:bg-white hover:text-black">SIGN UP</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </>
    )
}

export default Header
