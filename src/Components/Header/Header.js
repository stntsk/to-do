import React from "react";
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

export const Header = () => {
    return(
        <div className= 'header'>
            <Link to='' className='link'>
            <h1>To-Do or not To-Do</h1>
            </Link>
            <nav>
                <ul>
                    
                    <li>
                        <NavLink to='/createlist' className='navlink'>
                            Create a to-do list
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/lists' className='navlink'>
                            Lists
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
        
    )
}