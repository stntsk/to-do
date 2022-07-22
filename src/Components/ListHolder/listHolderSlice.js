import { createSlice } from '@reduxjs/toolkit';


const listHolderSlice = createSlice({
    name: 'listHolder',
    initialState : {
        listHolder: {}
    },
    reducers: {
        addList: (state, action) => {
            const {id} = action.payload;
            state.listHolder[id]=action.payload;
        } ,
        removeList: (state, action) => {
           delete state.listHolder[action.payload];

        }
    }
});

export const { addList, removeList } = listHolderSlice.actions;
export const selectListHolder = (state) => state.listHolder.listHolder;
export default listHolderSlice.reducer;
