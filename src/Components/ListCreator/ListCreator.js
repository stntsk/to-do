import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addList } from "../ListHolder/listHolderSlice";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from 'react-router-dom';
import './ListCreator.css';

export const ListCreator = () => {
    const [ listName, setListName ] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
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
        navigate('/lists');
    };

    return(
        <form onSubmit={handleSubmit}>
            <input
                id='listName' 
                type='text'
                onChange={handleChange}
                value={listName}
                placeholder='To-do list name'
                name='listName'    
            />
            <input 
                type='submit' 
                value='Create list'
                id='createList'
            />
        </form>
    )
}