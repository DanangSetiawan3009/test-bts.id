import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../slicer/auth/auth'
import checklistReducer from '../slicer/checklist/checklist'
import checklistItemReducer from '../slicer/checklist-item/checklist-item'

export const store = configureStore({
  reducer: {
      auth: authReducer,
      checklist: checklistReducer,
      checklistItem: checklistItemReducer
  }
})