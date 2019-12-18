import React from 'react';
import exerciseImg1 from '../images/exercise-1.png';
import exerciseImg from '../images/exercise.png';
import circlesImg from '../images/circles.png';
import emptyImg from '../images/empty.png';


import './styles/Card.css';

class Card extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            image: exerciseImg1
        }
    }

    //Se ejecuta depois que um componente se monta
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                image: exerciseImg
            })
        }, 5000)
    }

    render() {
        const {title, description, img, leftColor, rightColor} = this.props;
        return (
            <div className="card mx-auto Fitness-Card mb-3"
            style={{backgroundImage: `url(${circlesImg}), linear-gradient( to right, ${leftColor || '#56CCF2'}, ${rightColor || '#2F80ED'} )`}}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            {/* <img src={exerciseImg} className="float-right"/> */}

                            <img src={img || emptyImg} className="float-right" alt="rect in card component"/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card