import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../slicer/auth/auth'
import checklistReducer from '../slicer/checklist/checklist'

export const store = configureStore({
  reducer: {
      auth: authReducer,
      checklist: checklistReducer
  }
})