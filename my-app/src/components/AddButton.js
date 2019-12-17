import React from 'react';
import { Link } from 'react-router-dom';

/*Novo com babel */
const AddButton = () => (
    <div className="container">
        <div className="row justify-content-center">
        <Link to="/exercise/new" className="btn btn-success btn-lg">
            +
        </Link>
        </div>
    </div>
)

/*Antigo*/
// function AddButton(props) {
//     return(
//         <div className="container">
//             <div className="row justify-content-center">
//             <Link to="/exercise/new" className="btn btn-success btn-lg">
//                 +
//             </Link>
//             </div>
//         </div>
//     )
// }

export default AddButton