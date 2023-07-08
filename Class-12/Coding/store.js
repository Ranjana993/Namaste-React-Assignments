const { configureStore } = require("@reduxjs/toolkit");
import cartSlice from "./allReducers/cartSlice";


const store = configureStore({
    reducer:{
        cart :cartSlice
    }
})
export default store 