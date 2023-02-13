import { configureStore } from '@reduxjs/toolkit';
import counterReducer, { counterSlice } from './counter';


export default configureStore({
    reducer:{
        counter: counterReducer
    }
});