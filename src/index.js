import React from 'react';
import ReactDOM from 'react-dom';

import Header from 'containers/Header';
import 'styles/main.scss';


const MainContent = () => (
    <div className="main-content">Main content</div>
);

const App = () => (
    <div className="container">
        <Header/>
        <MainContent/>
    </div>
);

ReactDOM.render(
    <App/>,
    document.getElementById('root'),
)