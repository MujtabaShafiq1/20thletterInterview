import { configureStore } from "@reduxjs/toolkit"
import cardSlice from "./CardSlice"

const store = configureStore({
    reducer: {
        card: cardSlice.reducer
    }
})

export default store;