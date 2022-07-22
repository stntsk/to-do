import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addList } from "../ListHolder/listHolderSlice";
import { v4 as uuidv4 } from "uuid";

export const ListCreator = () => {
    const [ listName, setListName ] = useState('');
    const dispatch = useDispatch();
    
    const handleChange = (e) => {
        setListName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (listName.length === 0) {
            return;
        }
        let listNameId = uuidv4();
        dispatch(addList({name: listName, id: listNameId}));
        setListName('');
    };

    return(
        <form onSubmit={handleSubmit}>
            <input
                id='listName' 
                type='text'
                onChange={handleChange}
                value={listName}
                placeholder='To do list name'    
            />
            <input 
                type='submit' 
                value='Create list'
            />
        </form>
    )
}