import React from 'react'
import Hero from '../Component/Hero/Hero'
import Offers from '../Component/Offers/Offers'
import Pets from '../Component/Pets/Pets'
import Sidebar from '../Component/Sidebar/Sidebar'
import Offer2 from '../Component/Offers/Offer2'
import Testimony from '../Component/Testimony/Testimony'
import PetDisplay from '../Component/PetDisplay/PetDisplay'

function Shop() {
    return (
        <>
            <Hero />
            <Sidebar />
            <Offers />
            <Offer2 />
            <Pets />
            <Testimony />
            {/* <PetDisplay /> */}
        </>
    )
}

export default Shop