import { createSlice } from '@reduxjs/toolkit'

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    search: "", //filterInput
    filter: "all", //goodCategoryInput
    sort: "lowestPrice", //sortByInput
  },
  reducers: {
    setFilter: (state, action) => {
      state[action.payload.type] = action.payload.value;
    }
  }
})

// Action creators are generated for each case reducer function
export const { setFilter } = filterSlice.actions

export default filterSlice.reducer