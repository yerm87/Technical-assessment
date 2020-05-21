import ReactDOM from 'react-dom';
import React from 'react'
import App from './App';
import DataWrapper from './context';
import { BrowserRouter } from 'react-router-dom';

const app = (
    <DataWrapper>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </DataWrapper>
)

ReactDOM.render(app, document.querySelector('.root'));