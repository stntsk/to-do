import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectListHolder } from "./listHolderSlice";
import { useParams, useNavigate } from 'react-router-dom';
import { removeList } from "./listHolderSlice";
import { addToDo, selectToDo, removeToDo } from "../ToDo/toDoSlice";
import { v4 as uuidv4 } from "uuid";

export const List = () => {
    const lists = useSelector(selectListHolder);
    const { listId } = useParams();
    const list = lists[listId];
    const [ toDoItem, setToDoItem ] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const toDos = useSelector(selectToDo);
    
    
    
    const handleChange = (e) => {
        setToDoItem(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(toDoItem.length === 0) {
            return;
        };

        let toDoId = uuidv4();
        dispatch(addToDo({toDoName: toDoItem, id: toDoId, listId: listId}));
        setToDoItem('');
    };



    const deleteList = (e) => {
        e.preventDefault();
        if (window.confirm('Are you sure you want to delete the list?') === true) {
        dispatch(removeList(listId));
        navigate('/lists');
        const listToDos = Object.values(toDos).filter((toDo) => toDo.listId === listId);
        for (let i = 0; i < listToDos.length; i++) {
            dispatch(removeToDo(listToDos[i].id))
        };
        };
    };



    return (
        <div>
            <h2>{list.name}</h2>
            <button onClick={deleteList}>Delete list</button>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='What to do?' onChange={handleChange} value={toDoItem}/>
                <input type='submit' value='Add to list' />
            </form>
            <ul>
            {Object.values(toDos).filter(toDo => (toDo.listId === listId)).map((toDo) => (
                <li key={toDo.id} >{toDo.toDoName} <button onClick={() => (dispatch(removeToDo(toDo.id)))}>Done</button></li>
            ))}</ul>
        </div>
    )
}