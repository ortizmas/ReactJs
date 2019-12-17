import React from 'react';

//import Card from '../components/Card';
import Welcome from '../components/Welcome';
import AddButton from '../components/AddButton';
import ExerciseList from '../components/ExerciseList';
import Loading from '../components/Loading';

import FatalError from './500';



class Exercises extends React.Component {

    /*Novo com Babel codigo mais expresivo http://localhost:8000/api/exercises*/
    /*https://www.youtube.com/watch?v=PW2C3_be7Ks&list=PLIddmSRJEJ0vEBB6ECegg35IQ-sWjSDdo&index=28*/
    state = {
        data: [],
        loading: true,
        error: null
    }

    async componentDidMount(){
        await this.fetchExercises()
    }

    fetchExercises = async () => {
        try {
            let res = await fetch('http://localhost:8000/api/exercises')
            let data = await res.json()

            this.setState({
                data,
                loading: false
            })
        } catch (error) {
            this.setState({
                loading: false,
                error
            })
        }
        
    }

    render() {
        if (this.state.loading) 
            return <Loading />
        if (this.state.error)
            return <FatalError />
        return(
            <div className="container">
                {/* <Welcome userName="Eber Ortiz"/> */}
                <div className="row">
                    <ExerciseList 
                        exercises={
                            this.state.data
                        }
                    />
                </div>
                <AddButton />
                
            </div>
        ) 
        
    }
}

export default Exercises