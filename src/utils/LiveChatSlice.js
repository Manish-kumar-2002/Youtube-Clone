import { createSlice } from "@reduxjs/toolkit";

const LiveChatSlice = createSlice({
    name:"liveChat",
    initialState:{
        message:[]
    },
    reducers:{
        addMessage:(state,action)=>{
            state.message.splice(10,1);
            state.message.unshift(action.payload);
        }
    }
})

export const {addMessage} = LiveChatSlice.actions
export default LiveChatSlice.reducer