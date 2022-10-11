import {Link, NavLink} from 'react-router-dom'
import React from 'react'
import {links} from '../data'
import { RiMenu4Line } from 'react-icons/ri';
import './Navbar.css'
function Navbar() {
  return (
    <>
    <nav className='navbar'>
        
        <div className='nav-menu' >
            <Link className='logo' to="/Solutions">
                <h1 >Logo Here</h1>
            </Link>
                <ul className='navbar-nav'>
                    {
                        links.map(({name,path},index)=>{
                            return(
                                <li key={index}>
                                    <NavLink to={path}>{name}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
           <div className='btn'>
           <button> Contact Us</button>
           </div>
        </div>
        <button className='menu-btn'><RiMenu4Line/></button>
    </nav>
    
    </>
  )
}

export default Navbar