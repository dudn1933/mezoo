import { createContext, useReducer, useMemo } from 'react';

const globalInitialState = {
    imageToggle : { hidden: true, step:1, animation:false },
    mousePoint: {show: 0, x: 0, y: 0 },
    offsetTop: { mainLocation: 0, prodLocation: 0, contentLocation: 0, useLocation: 0, footerLocation: 0 },
    carouselNumber: {0: '', 1:'', 2:'', 3:'', 4:'' },
    currentScreenSize: { size: 0 },
    navigationBar: { show: false },
    newsBar: { view: false },
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
        case 'screenSizeRegister':
            return {
                ...state,
                currentScreenSize: payload
            }
        case 'navigationView':
            return {
                ...state,
                navigationBar: payload,
            }
        case 'newsView':
            return {
                ...state,
                newsBar: payload,
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
