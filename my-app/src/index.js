
// const element = document.createElement('h1')

// element.innerText = 'Hello world'

// const container = document.getElementById('root')

// container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.css';

const container = document.getElementById('root')

//ReacDOM.render(__QUE__, __DONDE__)
ReactDOM.render(
    <Card/>, 
    container
)
