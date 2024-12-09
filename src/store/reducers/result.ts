import { createSlice } from '@reduxjs/toolkit'

type Faculty = {
  name: string,
  score: number,
}

export const resultSlice = createSlice({
  name: 'result',
  initialState: {
    chart: {
      test: [] as number[],
      ai: [] as number[],
      final: [] as number[],
    },
    faculties: [] as Faculty[],
    description: ""
  },
  reducers: {
    setResult: (state, action) => {
      state.chart = action.payload.chart;
      state.faculties = action.payload.faculties;
      state.description = action.payload.description;
    },
    setChart: (state, action) => {
      state.chart = action.payload;
    },
    setFaculties: (state, action) => {
      state.faculties = action.payload;
    },
    setDescription: (state, action) => {
      state.description = action.payload;
    },
  },
})

export const { setResult, setChart, setFaculties, setDescription } = resultSlice.actions

export const result = resultSlice.reducer