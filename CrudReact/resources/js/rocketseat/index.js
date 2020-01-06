import React, { component } from 'react'
import ReactDOM from 'react-dom';
import api from '../services/api';

import Header from '../components/Header/index';
import Main from '../pages/main';

const App = () => (
    <div className="app">
        <Header />
        <Main />
    </div>
);

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}