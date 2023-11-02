import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import ChecklistService from '../../services/api/checklist'

export const addNewChecklist = createAsyncThunk('checklist/addNewChecklist', async (payloads, thunkAPI) => {
  try {
    const data = await ChecklistService.addNewChecklist(payloads)
    return data
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue()
  }
})

export const getAllChecklist = createAsyncThunk('checklist/getAllChecklist', async (params, thunkAPI) => {
  try {
      const data = await ChecklistService.getAllChecklist(params)
      return { list: data.data }
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
      return thunkAPI.rejectWithValue()
    }
})

export const deleteChecklistById = createAsyncThunk('checklist/deleteChecklistById', async (checklistId, thunkAPI) => {
  try {
    const data = await ChecklistService.deleteChecklistById(checklistId)
    return { checklist: data }
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue()
  }
})

const checklistSlice = createSlice({
  name: 'checklist',
  initialState: {
      checklist: {},
  },
  extraReducers: {
      [getAllChecklist.fulfilled]: (state, action) => {
        state.checklist = { list: action.payload.list }
      },
      [getAllChecklist.rejected]: (state, action) => {
        state.checklist = []
      },
  }
})

const { reducer } = checklistSlice
export default reducer