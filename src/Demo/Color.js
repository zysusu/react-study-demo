import React, { createContext, useReducer } from 'react';

export const ColorContext = createContext({});
export const UPDATE_COLOR = "update_color";

const reducer = (state, action) => {
    switch(action.type) {
        case UPDATE_COLOR:
            return action.color;
        default:
            return state;
    }
}

export function Color(props) {
    const [color, dispatch] = useReducer(reducer, 'blue');
    return (
        <ColorContext.Provider value={{color, dispatch}}>
            {props.children}
            {/* 使用props.children来显示对应的子组件 */}
        </ColorContext.Provider>
    )
}