import React from 'react'
import { Link } from 'react-router-dom'


const Menu = () => {
    return <ul className='nav'> 
        <li className='nav-item' id='home'>
            <Link className='nav-link' to='/'>Home</Link>
        </li>
        <li className='nav-item' id='about'>
            <Link className='nav-link' to='/about'>About</Link>
        </li>
        <li className='nav-item' id='contact'>
            <Link className='nav-link' to='/contact'>Contact</Link>
        </li>
        <li className='nav-item' id='login'>
            <Link className='nav-link' to='/login'>Login</Link>
        </li>
        <li className='nav-item' id='login'>
            <Link className='nav-link' to='/fav'>Favorites</Link>
        </li>
    </ul>
}

export default Menu