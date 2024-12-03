import React  from "react";
import { createContext, useReducer } from "react";
import contextReducer from './contextReducer'
import { type } from "@testing-library/user-event/dist/type";

const initialState = [];

const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children}) => {
    const [ transections, dispatch] = useReducer(contextReducer, initialState)

    // Action Creators
    const deleteTransection = (id) => 
        dispatch({ type: "DELETE_TRANSECTION", payload: id});
    

    const addTransection = (transection) => 
        dispatch({ type: "ADD_TRANSECTION", payload: transection});
    


    return(
        <ExpenseTrackerContext.Provider   value={{
            deleteTransection,
            addTransection,
        }}>
             {children}
        </ExpenseTrackerContext.Provider>
    )
}