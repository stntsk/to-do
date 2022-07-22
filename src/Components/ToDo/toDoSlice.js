import { createSlice } from '@reduxjs/toolkit';

const toDosSlice = createSlice({
    name: 'toDos',
    initialState: {
        toDos: {}
    },
    reducers: {
        addToDo: (state, action) => {
            const { id } = action.payload;
            state.toDos[id] = action.payload;
        },
        removeToDo: (state, action) => {
            delete state.toDos[action.payload];
        }
    },
});

export const selectToDo = (state) => state.toDos.toDos;
export const { addToDo, removeToDo } = toDosSlice.actions;
export default toDosSlice.reducer;