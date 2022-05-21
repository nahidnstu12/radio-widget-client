import { createSlice } from "@reduxjs/toolkit";
// import { addEmployee, deleteEmployee, getEmployees, updateEmployee } from "./employeeApi";

export const authSlice = createSlice({
    name: "radio",
    initialState: {
        list: {
            isLoading: false,
            status: "",
            values: []
        },
        save: {
            isSaving: false,
            isDeleting: false
        }
    },
    reducers: {
        clearSuccessMessage: (state, payload) => {
            // TODO: Update state to clear success message
        }
    },
    extraReducers: {
       
    }
})

export default authSlice.reducer
