import React, { Component } from 'react';
import { render } from 'react-dom';
import ImageUpload from './components/ImageUpload'; 

const App = (
    <div>
        <div>Hello World</div>
        <ImageUpload></ImageUpload>
    </div>
);


render(
    App,
    document.getElementById('root')
);
