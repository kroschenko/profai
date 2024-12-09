import { createSlice } from '@reduxjs/toolkit'

export const testSlice = createSlice({
  name: 'test',
  initialState: {
    description: "",
    vector: [] as number[]
  },
  reducers: {
    setTest: (state, action) => {
      state.description = action.payload.description;
      state.vector = action.payload.vector;
    },
  },
})

export const { setTest } = testSlice.actions

export const test = testSlice.reducer