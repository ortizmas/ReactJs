import React from 'react';
import Card from './Card';

// <></> forma de remplazar <React.Fragment></React.Fragment>
const ExerciseList = ({exercises}) => (
    <>
        <div className="container">
            <div className="row">
                {
                    exercises.map((exercise) => {
                        return (
                            <Card
                                key={exercise.id}
                                title={exercise.title}
                                description={exercise.description}
                                img={exercise.img}
                                leftColor={exercise.leftColor}
                                rightColor={exercise.rightColor}
                            />
                        )
                    })
                }
            </div>
        </div>
    </>
)

export default ExerciseList