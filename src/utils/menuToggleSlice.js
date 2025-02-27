import { createSlice } from "@reduxjs/toolkit";

const menuToggleSlice = createSlice({
    name:"menu",
    initialState:{
        menuToggle:true
    },
    reducers:{
        toggleMenu: (state)=>{
            state.menuToggle = !state.menuToggle
        },
        closeMenu:(state)=>{
            state.menuToggle = true
        }
    }
})

export const {toggleMenu, closeMenu} = menuToggleSlice.actions
export default menuToggleSlice.reducer

