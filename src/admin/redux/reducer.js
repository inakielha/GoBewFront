import { createReducer } from "@reduxjs/toolkit"
import { GET_CATEGORIES } from "./actions"

const initialState = {
    value: 0,
    product: {},
    categories: []

}
export const adminReducer = createReducer(initialState, (builder) => {
    builder.addCase(GET_CATEGORIES, (state, action) => {
        state.categories = action.payload
    })
})