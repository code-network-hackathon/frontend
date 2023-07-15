import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/store/reducers/counterSlice'
import filterReducer from '@/store/reducers/fliterSlice'

export default configureStore({
  reducer: {
    filter: filterReducer,
    counter: counterReducer
  }
})