import React from 'react'
import TestimonyCard from './TestimonyCard/TestimonyCard'

function Testimony() {
    return (
        <div className="testimony">
            <br /><strong>Testimony</strong>
            <hr />
            <div className="container">
                {/* <!-- Content here --> */}

                <div className="container text-center">
                    {/* row-1 */}
                    <div className="row">
                        <TestimonyCard name="Erik Lois"
                            src="../src/Component/Images/testi-1.png"
                            alt="testi-2.jpg"
                            review="Parakeets and canaries are popular choices. They are colorful, social, and can even learn to mimic sounds. Birds thrive in pairs, offering companionship and lively chatter." />

                        <TestimonyCard name="Erik Lois"
                            src="../src/Component/Images/testi-2.png"
                            alt="testi-2.jpg"
                            review="Parakeets and canaries are popular choices. They are colorful, social, and can even learn to mimic sounds. Birds thrive in pairs, offering companionship and lively chatter." />

                        <TestimonyCard name="Angel Priya"
                            src="../src/Component/Images/testi-3.webp"
                            alt="testi-3.jpg" review="Known for their loyalty and companionship, dogs are great for active families. They require regular exercise and training but offer unconditional love and protection." />

                        <TestimonyCard name="Kat Victoria "
                            src="../src/Component/Images/testi-4.png"
                            alt="testi-4.jpg" review="Betta and goldfish are ideal for beginners. They are calming to watch and require minimal interaction. A well-maintained aquarium can enhance any living space while providing a serene atmosphere." />

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Testimony