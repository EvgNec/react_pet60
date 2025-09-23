import { configureStore } from '@reduxjs/toolkit'
import { createAction, createReducer } from '@reduxjs/toolkit'

const myReducer = createReducer(0, {});

export default configureStore({
  reducer: {
    myValue: myReducer
  },
})