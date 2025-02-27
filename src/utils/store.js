import { configureStore } from "@reduxjs/toolkit"
import menuToggleReducer from "../utils/menuToggleSlice"
import searchCacheReducer from '../utils/searchCacheSlice'
import liveChatReducer from '../utils/LiveChatSlice'


const store = configureStore({
    reducer:{
        menu:menuToggleReducer,
        searchCache:searchCacheReducer,
        liveChat:liveChatReducer
    }
})

export default store