import React, { Component } from 'react'

class Simulations extends Component {
    constructor(props) {
        super(props)
        this.state = {
            socio: 1,
            funcionario: 1,
            nascimentoValue: '',
        }

        this.handleChang = this.handleChang.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChang(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        alert("Um nome foi enviado: " + JSON.stringify(this.state));
        e.preventDefault();
    }

    render() {
        return(
            <div className="row">
                <div className="col-md-6">
                    <form action="#">
                        <div className="form-group">
                            <label htmlFor="socio">Socio</label>
                            <input type="number" name="socio" className="form-control" value={this.state.socio} onChange={this.handleChang} min="0" max="10" step="1" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="funcionario">Funcionario</label>
                            <input type="number" name="funcionario" className="form-control" value={this.state.funcionario} onChange={this.handleChang} min="0" max="10" step="1"/>
                        </div>

                        <div className="form-group">

                            <label htmlFor="nascimentoValue">Nacimento</label>
                            <input
                                id="nascimento"
                                size={20}
                                className="form-control"
                                mask="99/99/9999"
                                slotChar="__/__/____"
                                name="nascimentoValue"
                                value={this.state.nascimentoValue}
                                onChange={this.handleChang}
                                required="required"
                            />
                        </div>

                        <button className="btn btn-dark btn-sm" onClick={this.handleSubmit}>Continuar</button>
                    </form>
                </div>

                <div className="col-md-6">
                    <div className="text-center">
                        <h5>Resultados</h5>
                        <h1>{parseInt(this.state.socio) + parseInt(this.state.funcionario) + 50} </h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Simulations;