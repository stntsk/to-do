import { configureStore } from "@reduxjs/toolkit";
import listHolderReducer from '../Components/ListHolder/listHolderSlice';
import toDosReducer from '../Components/ToDo/toDoSlice';

export default configureStore({
    reducer: {
        listHolder: listHolderReducer,
        toDos: toDosReducer,
    },
})