import React from 'react'

class Soma extends React.Component {

    render() {
        const n1=2, n2=4 
        const n3 = n1 * n2

        return (
            <div className="shopping-list">
                <h1>A soma é {n3}</h1>
            </div>
        )
    }
}

export default Soma;

// ========================================

// ReactDOM.render(
//     <ShoppingList />,
//     document.getElementById('shopping')
// );