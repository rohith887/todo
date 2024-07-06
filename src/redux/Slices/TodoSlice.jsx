import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
const TodoSlice=createSlice({
   name:'todo',
   initialState:{
    todo:[],
   },
   reducers:{
      addtoList:(state,action)=>{
         const colors = ['#F0DEDE', '#DDECEF', '#E8DAD7', '#DBF9F9', '#FFE7CD','#F8F9FB','#D5E4F4','#DFE8E9','#FEDACB',' #FAE7EB','#DAEBF2','#FEF0C2','#BAF1B4','#F3EBDC','#F9F1D7','#EAFCFC','#DFE8E3','#FEEDD9','#D8F5F3','#C4F2E8','#FFF7C8','#BDEBEF','#FFCDDA','#CCEBD3','#F8DEE9','#C0DAF1','#E2CBE1', '#E1EEF7', '#FBF4BD', '#FAE7E8','#F7E091', '#F5EFE3', '#BAD4D3', '#E5ECF2', '#C3C5C4','#FCFBB8', '#FBE665'


         ]; // Predefined set of colors
        const color = colors[Math.floor(Math.random() * colors.length)];
        state.todo.push({ id: uuidv4(), text: action.payload,color});
   
      },
      deleteFromList:(state,action)=>{
        state.todo = state.todo.filter(item => item.id !== action.payload);
    }
}
});
export const {addtoList,deleteFromList}=TodoSlice.actions;
export default TodoSlice.reducer;