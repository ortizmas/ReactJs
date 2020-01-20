import React, { component } from 'react'
import ReactDOM from 'react-dom';

import Toggle from '../components/Examples/Toggle';
import LoginButton from '../components/Examples/LoginButton';
import Greeting from '../components/Examples/Conditionals';
import LoginControl from '../components/Examples/LoginControl';
import CategorySearch from '../components/Examples/Categories/CategorySearch';


const App = () => (
    <div className="container">
        <div className="row">
            <div className="col-md">
                <Toggle />
            </div>
            <div className="col-md">
                <LoginButton />
            </div>
            <div className="col-md">
                <Greeting isLoggedIn={false} />,
            </div>
        </div>

        <div className="row">
            <div className="col-md">
                <LoginControl />
            </div>
            <div className="col-md">
                <CategorySearch />
            </div>
            <div className="col-md">
            </div>
        </div>
    </div>
);

export default App;

if (document.getElementById('examples')) {
    ReactDOM.render(<App />, document.getElementById('examples'));
}