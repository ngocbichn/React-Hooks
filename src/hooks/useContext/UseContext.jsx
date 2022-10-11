import React, { createContext, useContext, useState } from 'react'

const stateDefault = {}

export const Context = createContext(stateDefault)

const UseContext = (props) => {

    const [state, setState] = useState({
        name: 'Bich',
    })
    const handleState = (name) => {
        setState((state) => {
            return {
                ...state,
                name,
            }
        })
    }

    return (
        <Context.Provider value={{ ...state, handleState }}>
            {props.children}
        </Context.Provider>
    )
}

export default UseContext

export const useContextDemo = () => {
    return useContext(Context)
}