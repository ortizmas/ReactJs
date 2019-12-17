import React from 'react';

import exerciseImg from '../images/exercise.png';
import circlesImg from '../images/circles.png';
import './styles/Card.css';

/*bABEL*/
const Welcome = ( {userName} ) => (
    <div>
        <div className="card mx-auto Fitness-Card mb-3" style={{backgroundImage: `url(${circlesImg}), linear-gradient(to right, #A74CF2, #617BFB)`}}>
            <div className="card-body">
                <div className="row center">
                    <div className="col-6">
                        <img src={exerciseImg} className="float-right" alt="Nova geração react"/>
                    </div>
                    <div className="col-6 Fitness-Card-Info">
                        <h1>Welcome {userName}</h1>
                        <p>Nova description</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

// Componentes funcionales
// function Welcome(props) {
//     return(
//         <div>
//             <div className="card mx-auto Fitness-Card mb-3" style={{backgroundImage: `url(${circlesImg}), linear-gradient(to right, #A74CF2, #617BFB)`}}>
//                 <div className="card-body">
//                     <div className="row center">
//                         <div className="col-6">
//                             <img src={exerciseImg} className="float-right" alt="Nova geração react"/>
//                         </div>
//                         <div className="col-6 Fitness-Card-Info">
//                             <h1>Welcome {props.userName}</h1>
//                             <p>Nova description</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

export default Welcome