import React, { createContext, useContext, useState } from 'react';
import { setInStorage, getFromStorage } from '../utils/localstorage';
import { parseTextAreaValue } from './helpers';

export const AppContext = createContext(undefined);

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within a AppContextProvider');
    }
    return context;
};

export const AppContextProvider = ({ children }) => {
    const [activeView, setActiveView] = useState(getFromStorage('activeView') || 'intro');
    const [participants, setParticipants] = useState(getFromStorage('participants') || null);
    const [selectedWinner, setSelectedWinner] = useState(getFromStorage('selectedWinner') || null);

    const changeActiveView = viewName => {
        setActiveView(viewName);
        setInStorage('activeView', viewName);
    };
    const textareaChange = value => {
        const val = parseTextAreaValue(value) || null;
        setParticipants(val);
        setInStorage('participants', val);
    };
    const selectWinner = value => {
        const val = value || null;
        setSelectedWinner(val);
        setInStorage('selectedWinner', val);
    };
    const clearState = callback => {
        setActiveView('intro');
        setParticipants(null);
        setSelectedWinner(null);
        callback();
    };

    const contextValue = {
        activeView,
        participants,
        selectedWinner,
        onChangeView: changeActiveView,
        onTextareaChange: textareaChange,
        onSelectedWinner: selectWinner,
        onClearState: clearState,
    };

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
