import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './reducers/basketSlice'

export default configureStore({
  reducer: {
    basket: basketReducer
  }
})
