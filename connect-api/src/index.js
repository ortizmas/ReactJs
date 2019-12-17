
// const element = document.createElement('h1')

// element.innerText = 'Hello world'

// const container = document.getElementById('root')

// container.appendChild(element)

import 'bootstrap/dist/css/bootstrap.css';

import React from 'react'
import ReactDOM from 'react-dom'
// import Card from './components/Card';
// import Welcome from './components/Welcome';
// import Exercises from './pages/Exercises';
import App from './components/App';




const container = document.getElementById('root')

//ReacDOM.render(__QUE__, __DONDE__)
// ReactDOM.render(
//     <div>
//         <Welcome userName="Eber Ortiz"/>
//         <Card
//             title="Technique Guides"
//             description="Learn amazing street workout and calisthenic"
//             img="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/exercise.png?alt=media&token=b9c4b236-16a9-4a56-bba2-90c9660a0f06"
//             leftColor="#A74CF2"
//             rightColor="#617BFB"
//         />
//     </div>, 
//     container
// )

ReactDOM.render(
    <div>
        <App />
        {/* <Exercises/> */}
    </div>,
    container
)