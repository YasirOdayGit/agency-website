import { BrowserRouter } from 'react-router-dom';
import { HeroText } from './components/Hero/HeroText';
import React from 'react';
export function App() {
    return (
        <BrowserRouter>
            <HeroText />
        </BrowserRouter>
    );
}
