import React, { Component } from 'react';
import { render } from 'react-dom';
import JWTManager from './components/JWTManager';

const App = (
    <div>
        <JWTManager></JWTManager>
    </div>
);


render(
    App,
    document.getElementById('root')
);
