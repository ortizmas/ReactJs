import React from 'react'

class ShoppingList extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>Lista de compra ára {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculos</li>
                </ul>
            </div>
        )
    }
}

export default ShoppingList;

// ========================================

// ReactDOM.render(
//     <ShoppingList />,
//     document.getElementById('shopping')
// );