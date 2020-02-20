import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ShoppingList from './shopping';
import Soma from './soma';
import Form from './form';
import Props from './props';
import Input from './input';
import ContainerView from './ContainerView';
import Simulations from './simulations'




class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* Recebendo props value */}
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i}/>;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <div className="board-row">
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
        <div>
          <Board />
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
    <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>

        <div className="row mt-5">
            <div className="col-md-6">
                <div className="card mb-5">
                    <div className="card-body">
                        <Game />
                    </div>
                </div>

                <div className="card mb-5">
                    <div className="card-body">
                        <ShoppingList name="Eber" />
                    </div>
                </div>

                <div className="card mb-5">
                    <div className="card-body">
                        <Soma />
                    </div>
                </div>

                <div className="card mb-5">
                    <div className="card-body">
                        <Form />
                    </div>
                </div>

                <div className="card mb-5">
                    <div className="card-body">
                        <Props />
                    </div>
                </div>

                <div className="card mb-5">
                    <div className="card-body">
                        <Input />
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div className="card mb-5">
                    <div className="card-body">
                        <ContainerView />
                    </div>
                </div>

                <div className="card mb-5">
                    <div className="card-header">
                        <h5 className="card-title">SIMULAÇÃO</h5>
                    </div>
                    <div className="card-body">
                        <Simulations />
                    </div>
                </div>

            </div>
        </div>
    </div>,

    document.getElementById('root')
  
);
