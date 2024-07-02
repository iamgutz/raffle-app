import React from 'react';
import { AppContextProvider } from './context.js';
import AppWrapper from '../components/app-wrapper';
import { Main } from '../components/layout';
import ActiveContainer from './ActiveContainer.js';

export default function App() {
    return (
        <AppContextProvider>
            <AppWrapper>
                <Main>
                    <ActiveContainer />
                </Main>
            </AppWrapper>
        </AppContextProvider>
    );
}
