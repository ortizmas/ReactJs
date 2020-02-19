import React from 'react'

var itens = [
    {id: 1, name: "Eber"},
    {id: 2, name: "Joel"}
];

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            partners: "",
            employees: ""
        }
    }

    render() {
        return (
            <div>
                <h2>Simulação de dados {1+2+4}</h2>
                <label htmlFor="partners">Socios: </label>
                <input type="text" name="partners" id="partners"/>
                <br/><br/>
                <label htmlFor="employees">Funcionarios: </label>
                <input type="text" name="employees" id="employees"/>
                <br/><br/>
                <label htmlFor="total">Total: </label>
                <input type="text" name="total" id="total" />
                <br/><br/>
                <button className="btn btn-success">Simular</button>

                <hr/>
                <ul>
                    {itens.map(function (item) {
                        return <li key={item.id}>{item.id} - {item.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Form;