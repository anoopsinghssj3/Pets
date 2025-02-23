import React from 'react'
import '../../App.css'
import PetsCard from './PetsCard/PetsCard'
function Pets() {
    return (<>
        {/* pets  */}
        <div className="pets">
            <br /><strong>Pets</strong>
            <hr />
            <div className="container">

                <div className="container text-center">
                    <div className="row">
                        <PetsCard title="Fish|Betta Fish"
                            src="../src/Component/Images/betta-fish.jpeg"
                            alt="cat.jpg" price="200" />

                        <PetsCard title="Cat|british-shorthair"
                            src="../src/Component/Images/british-shorthair.jpeg"
                            alt="cat.jpg" price="1000" />

                        <PetsCard title="Parrot|sulphur-crested-cockatoo"
                            src="../src/Component/Images/sulphur-crested-cockatoo.webp"
                            alt="cat.jpg" price="500" />

                        <PetsCard title="cat|cornish-rex"
                            src="../src/Component/Images/cornish-rex.jpeg"
                            alt="cat.jpg" price="200" />



                    </div>
                    <div className="row">
                        <PetsCard title="Fish|Betta Fish"
                            src="../src/Component/Images/betta-fish.jpeg"
                            alt="cat.jpg" price="200" />

                        <PetsCard title="Cat|british-shorthair"
                            src="../src/Component/Images/british-shorthair.jpeg"
                            alt="cat.jpg" price="1000" />

                        <PetsCard title="Parrot|sulphur-crested-cockatoo"
                            src="../src/Component/Images/sulphur-crested-cockatoo.webp"
                            alt="cat.jpg" price="500" />

                        <PetsCard title="cat|cornish-rex"
                            src="../src/Component/Images/cornish-rex.jpeg"
                            alt="cat.jpg" price="200" />
                    </div>

                    <div className="row">
                        <PetsCard title="Fish|Betta Fish"
                            src="../src/Component/Images/betta-fish.jpeg"
                            alt="cat.jpg" price="200" />

                        <PetsCard title="Cat|british-shorthair"
                            src="../src/Component/Images/british-shorthair.jpeg"
                            alt="cat.jpg" price="1000" />

                        <PetsCard title="Parrot|sulphur-crested-cockatoo"
                            src="../src/Component/Images/sulphur-crested-cockatoo.webp"
                            alt="cat.jpg" price="500" />

                        <PetsCard title="cat|cornish-rex"
                            src="../src/Component/Images/cornish-rex.jpeg"
                            alt="cat.jpg" price="200" />
                    </div>

                    <div className="row">
                        <PetsCard title="Fish|Betta Fish"
                            src="../src/Component/Images/betta-fish.jpeg"
                            alt="cat.jpg" price="200" />

                        <PetsCard title="Cat|british-shorthair"
                            src="../src/Component/Images/british-shorthair.jpeg"
                            alt="cat.jpg" price="1000" />

                        <PetsCard title="Parrot|sulphur-crested-cockatoo"
                            src="../src/Component/Images/sulphur-crested-cockatoo.webp"
                            alt="cat.jpg" price="500" />

                        <PetsCard title="cat|cornish-rex"
                            src="../src/Component/Images/cornish-rex.jpeg"
                            alt="cat.jpg" price="200" />
                    </div>
                </div>
            </div>

        </div>

    </>
    )
}

export default Pets