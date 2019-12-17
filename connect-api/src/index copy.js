
// const element = document.createElement('h1')

// element.innerText = 'Hello world'

// const container = document.getElementById('root')

// container.appendChild(element)

import React from 'react'
import ReactDOM from 'react-dom'

const user = {
    firstName: 'Eber',
    lastName: 'Ortiz',
    yearsOld: 35,
    avatar: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
}

function getName() {
    return `${user.firstName + ' ' + user.lastName + ' ' + user.yearsOld}`
}


function getGreeting(user) {
    if (user) {
        return <h1>hello {getName(user)}</h1>
    }
    return <h1>Hello Stranger</h1>
}
const name = 'Eber Ortiz'
//const element = <h1>Hello world {name} : {getName(user)}</h1>
const element = (
    <div>
        {getGreeting(user)}
        <img src={user.avatar} />
    </div>
)

const container = document.getElementById('root')

//ReacDOM.render(__QUE__, __DONDE__)
ReactDOM.render(
    element, 
    container
)
