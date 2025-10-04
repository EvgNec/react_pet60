import { configureStore } from '@reduxjs/toolkit'
import { createAction, createReducer } from '@reduxjs/toolkit'

// створюємо екшени
export const increment = createAction('myValue/increment');
export const decrement = createAction('myValue/decrement');

// редʼюсер через builder callback
const myReducer = createReducer(0, (builder) => {
    builder
      .addCase(increment, (state) => state + 1)
      .addCase(decrement, (state) => state - 1);
  });

export default configureStore({
  reducer: {
    myValue: myReducer
  },
})