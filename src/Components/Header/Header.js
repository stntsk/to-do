import React from "react";
import { Link } from 'react-router-dom'
export const Header = () => {
    return(
        <div>
            <Link to='/' >
            <h1>To-do App</h1>
            </Link>
            <nav>
                <ul>
                    
                    <li>
                        <Link to='/createlist'>
                            Create a to-do list
                        </Link>
                    </li>
                    <li>
                        <Link to='/lists'>
                            Lists
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
        
    )
}