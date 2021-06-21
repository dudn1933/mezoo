import { createContext, useReducer, useMemo } from 'react';

const globalInitialState = {
    imageToggle : { hidden: true, step:1, animation:false },
    mousePoint: {show: 0, x: 0, y: 0 },
    contentToggle: { show: false },
    pageScrollY: { scrollY: 0, first:0, second:0, third:0},
    offsetTop: { prodLocation: 0, contentLocation: 0, advantageLocation: 0 },
    carouselNumber: {0: '', 1:'', 2:'', 3:'', 4:'' }
};

const globalReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'productChange':
            return {
                ...state,
                imageToggle: payload,
            }
        case 'mousePointChange':
            return {
                ...state,
                mousePoint: payload,
            }
        case 'contentChange':
            return {
                ...state,
                contentToggle: payload,
            }
        case 'pageScrollValueChange':
            return {
                ...state,
                pageScrollY: payload,
            }
        case 'offsetTopChange':
            return {
                ...state,
                offsetTop: payload
            }
        case 'carouselNumberRegister':
            return {
                ...state,
                carouselNumber: payload
            }
        default:
            throw new Error('[Error] dispatch - global');
    }
};

export const GlobalContext = createContext({
    globalState: null,
    globalDispatch: () => {},
});

const GlobalProvider = ({ children }) => {
    const [globalState, globalDispatch] = useReducer(globalReducer, globalInitialState);
    const value = useMemo(() => ({ globalState, globalDispatch }), [globalState, globalDispatch]);
    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
