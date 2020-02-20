import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            socio: 0,
            funcionario: 0,
            sexo: "",
            escola: ""
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    // onChange = (evento) => {
    //     const state = Object.assign({}, this.state);
    //     const campo = evento.target.name;
    //     state[campo] = evento.target.value;
    //     this.setState({state})
    // }

    onChange(e) {
        const campo = e.target.name;
        if(campo === 'socio' && e.target.value.includes('_')) {
            return;
        }
        
        this.setState({
            // title: e.target.value,
            // body: e.target.value
            [e.target.name]: e.target.value
        });
        //console.log('onChange', this.state.body); 
    }

    onSubmit(e) {
        e.preventDefault();

        // Validations form
        console.log(this.state);
        
    }

    render() {
        return(
            <div className="container">
                Socio: <input 
                        type="number" 
                        name="socio" 
                        value={this.state.socio}
                        onChange={this.onChange}
                        className="form-control"
                        />
                Funcionario: <input 
                        type="number" 
                        name="funcionario" 
                        value={this.state.funcionario}
                        onChange={this.onChange}
                        className="form-control"
                        />
                        <br/>
                Sexo: <input 
                        className="form-control"
                        type="radio" 
                        name="sexo"
                        value="masculino"
                        onChange={this.onChange}
                        checked={this.state.sexo==="masculino"} />
                        <input
                        className="form-control"
                        type="radio" 
                        name="sexo"
                        value="femenino"
                        onChange={this.onChange}
                        checked={this.state.sexo==="femenino"} />
                <br/>
                Escola: <select className="form-control" name="escola" onChange={this.onChange} value={this.state.escola}>
                            <option value="">Selecionar</option>
                            <option value="1">Escola 1</option>
                            <option value="2">Escola 2</option>

                        </select>

                        <br/>

                        <button className="btn btn-success" onClick={this.onSubmit}>Enviar</button>
                
                {JSON.stringify(this.state)}
            </div>
        );
    }
}

export default Input;