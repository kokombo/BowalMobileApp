import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    alertShown: false
}

const customAlertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        showAlert: (state, action)=> {
            state.alertShown = true
        }
        
    }

})

export const {showAlert} = customAlertSlice.actions
export default customAlertSlice.reducer