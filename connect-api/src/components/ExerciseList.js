import React from 'react';
import Card from './Card';

const ExerciseList = ({exercises}) => (
    <div className="col-md-12 col-lg-12">
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
)

export default ExerciseList