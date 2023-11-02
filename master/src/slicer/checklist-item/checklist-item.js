import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import ChecklistService from '../../services/api/checklist'

export const addChecklistItem = createAsyncThunk('checklist-item/addChecklistItem', async (payloads, thunkAPI) => {
  try {
    const data = await ChecklistService.addChecklistItem(payloads)
    return data
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue()
  }
})

export const getAllChecklistItemById = createAsyncThunk('checklist-item/getAllChecklistItemById', async (params, thunkAPI) => {
  try {
      const data = await ChecklistService.getAllChecklistItemById(params)
      return { list: data.data }
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
      return thunkAPI.rejectWithValue()
    }
})

export const getChecklistItemById = createAsyncThunk('checklist-item/getChecklistItemById', async (checklistId, checklistItemId, thunkAPI) => {
  try {
      const data = await ChecklistService.getChecklistItemById(checklistId, checklistItemId)
      return data
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
      return thunkAPI.rejectWithValue()
    }
})

export const updateStatusChecklistItem = createAsyncThunk('checklist-item/updateStatusChecklistItem', async (checklistId, checklistItemId, thunkAPI) => {
  try {
      const data = await ChecklistService.updateStatusChecklistItem(checklistId, checklistItemId)
      return data
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
      return thunkAPI.rejectWithValue()
    }
})

export const deleteChecklistItemById = createAsyncThunk('checklist-item/deleteChecklistItemById', async (checklistId, checklistItemId, thunkAPI) => {
  try {
    const data = await ChecklistService.deleteChecklistItemById(checklistId, checklistItemId)
    return data
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue()
  }
})

export const updateChecklistItemById = createAsyncThunk('checklist-item/updateChecklistItemById', async (checklistId, checklistItemId, payloads, thunkAPI) => {
  try {
      const data = await ChecklistService.updateChecklistItemById(checklistId, checklistItemId, payloads)
      return data
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
      return thunkAPI.rejectWithValue()
    }
})

const checklistItemSlice = createSlice({
  name: 'checklist-item',
  initialState: {
      checklistItem: {},
  },
  extraReducers: {
      [getAllChecklistItemById.fulfilled]: (state, action) => {
        state.checklistItem = { list: action.payload.list }
      },
      [getAllChecklistItemById.rejected]: (state, action) => {
        state.checklistItem = []
      },
  }
})

const { reducer } = checklistItemSlice
export default reducer