import React from 'react';
import { Component } from 'react';

class ContainerView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tarefas: [],
            inputTarefa: ""
        }

        this.addTarefas = this.addTarefas.bind(this);
        this.onChange = this.onChange.bind(this);
        this.removeTarefa = this.removeTarefa.bind(this);
        this.editTarefa = this.editTarefa.bind(this);

    }

    addTarefas(e) {
        e.preventDefault();
        const tarefas = this.state.tarefas.slice();
        tarefas.push(this.state.inputTarefa);

        this.setState({
            tarefas: tarefas,
            inputTarefa: ""
        })
    }

    editTarefa(index, valor) {
        const tarefas = this.state.tarefas.slice();
        tarefas[index] = valor;

        this.setState({ tarefas });
    }

    removeTarefa(index) {
        const tarefas = this.state.tarefas.slice();
        tarefas.splice(index, 1);

        this.setState({tarefas});
    }

    onChange(e) {
        e.preventDefault();
        //const state = Object.assign({}, this.state);
        //state[e.target.name] =  e.target.value;
        
        this.setState({
            [e.target.name]: e.target.value
        });
    } 

    render() {
        return(
            <ListaView 
                tarefas={this.state.tarefas}
                inputTarefa={this.state.inputTarefa}
                onChange={this.onChange}
                addTarefas={this.addTarefas}
                removeTarefa={this.removeTarefa}
                editTarefa={this.editTarefa}
            />
        )
    }
}

const ListaView = (props) => (
    <div>
        <h1>Lista de tarefas</h1>
        <div className="form-row align-items-center">
            <div className="col-auto my-1">
                <input className="form-control" type="text" name="inputTarefa"  value={props.inputTarefa} onChange={props.onChange} />
            </div>
            <div className="col-auto my-1">
                <button className="btn btn-primary" onClick={props.addTarefas}>Add</button>
            </div>
        </div>
        
        {
            props.tarefas.map((tarefa, index) => (
                    // <p key={index}>
                    //     {index + 1} - {tarefa} -
                    //     <span className="badge-pill badge-danger m-2" onClick={() => props.removeTarefa(index)}>Excluir</span>
                    // </p>
                    <div key={index}>
                        <ListaViewItem
                            tarefa={tarefa}
                            index={index}
                            removeTarefa={props.removeTarefa}
                            editTarefa={props.editTarefa}
                        />
                    </div>
                    
                )
            )
        }
        
    </div>
);

class ListaViewItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            edit: false,
            texto: props.tarefa
        }

        this.removeTarefa = () => {
            if (window.confirm("Você realmente deseja excluir este item!!") ) {
                this.props.removeTarefa(this.props.index);
            }
        }

        this.editTarefa = () => {
            this.props.editTarefa(this.props.index, this.state.texto);
            this.setState({edit: false});
        }

        this.abrirForm = () => {
            this.setState({edit: true});
        }

        this.fecharForm = () => {
            this.setState({ edit: false });
        }

        this.onChange = (e) => {
            this.setState({
                texto: e.target.value
            })
        }
    }

    render() {
        if (!this.state.edit) {
            return(
                <p>
                    {this.props.index+1} - {this.props.tarefa}
                    <span style={{ cursor: "pointer" }} className="badge-pill badge-info m-2" onClick={this.abrirForm}>Alterar</span>
                    <span style={{ cursor: "pointer" }} className="badge-pill badge-danger m-2" onClick={() => this.props.removeTarefa(this.props.index)}>Excluir</span>
                </p>
            );
        }

        return(
            <div>
                {this.props.index+1}
                <input type="text" name="inputTarefa" value={this.state.texto} onChange={this.onChange}/>
                <span style={{ cursor: "pointer" }} className="badge-pill badge-success m-2" onClick={this.editTarefa}>Salvar</span>
                <span style={{ cursor: "pointer" }} className="badge-pill badge-danger m-2" onClick={this.fecharForm}>Cancelar</span>
            </div>
        );
    }

}

export default ContainerView;