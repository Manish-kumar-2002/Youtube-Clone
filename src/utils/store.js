import { configureStore } from "@reduxjs/toolkit"
import menuToggleReducer from "../utils/menuToggleSlice"
import searchCacheReducer from '../utils/searchCacheSlice'

const store = configureStore({
    reducer:{
        menu:menuToggleReducer,
        searchCache:searchCacheReducer
    }
})

export default store