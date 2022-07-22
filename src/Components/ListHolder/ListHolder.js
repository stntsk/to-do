import React from "react";
import { useSelector} from "react-redux";
import { selectListHolder, } from "./listHolderSlice";
import { NavLink, Outlet } from 'react-router-dom'


export const ListHolder = () => {
    const lists = useSelector(selectListHolder);

    return (
        <div>
            <h1>To-do lists</h1>
            <ul>
                {Object.values(lists).map((list) => (
                    
                        <li className="list" key={list.id}>
                            <NavLink  to={list.id}>{list.name}</NavLink>
                        
                        </li>
                    
                    
                ))}
                
            </ul>
            <Outlet />
        </div>
    )
}