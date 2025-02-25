import { configureStore } from "@reduxjs/toolkit"
import menuToggleReducer from "../utils/menuToggleSlice"

const store = configureStore({
    reducer:{
        menu:menuToggleReducer
    }
})

export default store