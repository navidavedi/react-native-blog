import React, { useReducer } from 'react'

export default ( reducer, action, initialState ) => {
    const Context = React.createContext()

    const Provider = ({ childern }) => {
        const [state, dispatch] = useReducer(reducer, initialState)

        const boundActions = {};
        for (let key in action) {
            boundActions[key] = action[key](dispatch)
        }

        return (
            <Context.Provider value={{ state, ...boundActions}}>
                { childern }
            </Context.Provider>
        )
    }

    return { Context, Provider }
}