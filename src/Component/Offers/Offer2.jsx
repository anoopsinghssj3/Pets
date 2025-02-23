import React from 'react'
import OffersCard from './OffersCard/OffersCard'
import '../../App.css'

function Offer2() {
    return (<>

        {/* product with offer/ non-offer or home screen */}

        <div className="offers">
            <br /><strong>Offer & Discount on Pets</strong>
            <hr />
            <div className="container">

                {<div className="container text-center">
                    <div className="row">
                        <OffersCard categories="Dogs2"
                            src="../src/Component/Images/dogs.jpg"
                            alt="cat.jpg" discount="Min. 30% Off" />
                        <OffersCard categories="Dogs"
                            src="../src/Component/Images/cats.jpg"
                            alt="cat.jpg" discount="Min. 30% Off" />

                        <OffersCard categories="Pet Food"
                            src="../src/Component/Images/pet_food.jpg"
                            alt="pet_food.jpg" discount="Min. 50% Off" />
                        <OffersCard categories="Other Pet"
                            src="../src/Component/Images/petgroup.jpg"
                            alt="other pet.jpg" discount="Upto 20% Off" />
                    </div>
                </div>}
            </div>

        </div>


    </>
    )
}

export default Offer2