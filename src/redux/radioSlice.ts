import { createSlice } from "@reduxjs/toolkit";
import { radiodata } from "../mockdata";
// import { addEmployee, deleteEmployee, getEmployees, updateEmployee } from "./employeeApi";

interface ISelectedStation {
  id: number,
  stationTitle: string,
  frequency:string,
}

export const radioSlice = createSlice({
    name: "radio",
    initialState: {
       stationLists: radiodata,
       showStation: false,
       selectedStation: <ISelectedStation>{}
    },
    reducers: {
      toggleStation: (state, action) => {
        // console.log(action)
        
         state.selectedStation = state.selectedStation.id ===  action.payload.id ? {} : action.payload
      }
    },
    extraReducers: {
       
    }
})
export const {toggleStation} = radioSlice.actions

export default radioSlice.reducer
