import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import App component
import App from './components/Products'

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductEdit from './components/ProductEdit';

// change the getElementId from example to app 
// render App component instead of Example
// if (document.getElementById('root')) {
//     ReactDOM.render(<App />, document.getElementById('root'));
// }

if (document.getElementById('product')) {
    ReactDOM.render(
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/:id/edit" component={ProductEdit} exact={true} />
                    <App />
                </Switch>
            </div>
        </BrowserRouter>,
        document.getElementById('product')
    );
}