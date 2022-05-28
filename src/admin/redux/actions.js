// import { createAsyncThunk, createAction } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'

import axios from "axios"


const { REACT_APP_APIURL } = process.env
export const GET_CATEGORIES = createAsyncThunk(
    'GET_CATEGORIES', async () => {
        const response = await fetch(`${REACT_APP_APIURL}category`)
        return await response.json()
    })


export const POST_PRODUCT = createAsyncThunk(
    "POST_PRODUCT", async (productInfo) => {
        try {
            const res = await axios.post(REACT_APP_APIURL + "new", productInfo);
            return res
        } catch (e) {
            console.log(e)
        }
    }
)