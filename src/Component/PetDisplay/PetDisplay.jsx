import React from 'react'
import PetDisplayCard from './PetDisplayCard/PetDisplayCard'

function PetDisplay() {
    return (<>
        <div className="pet-display">
            <PetDisplayCard src_i1="../src/Component/Images/Fluffy_Poodle.jpg"
                src_i2="../src/Component/Images/Fluffy_Poodle.jpg"
                src_i3="../src/Component/Images/Fluffy_Poodle.jpg" 
                src_i4="../src/Component/Images/Fluffy_Poodle.jpg"
                 src="../src/Component/Images/Fluffy_Poodle.jpg" 
                 alt="Poodle"
                  title="Fluppy Poodle" 
                  description="description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quo eius porro, ullam dolores autem officiis corporis, nihil id, enim impedit sequi laboriosam vero atque!
               " 
                  oldPrice="5000" newPrice="3000" trend="" />
        </div></>
    )
}

export default PetDisplay