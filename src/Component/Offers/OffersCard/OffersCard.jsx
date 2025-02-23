import React from 'react'
import '../../../App.css'

function OffersCard({ src, alt, categories, discount }) {
    return (
        <>

            <div className="col">
                
                {/* card */}
                {/* <Link to={<Product/>}> */}
                <div className="offer-card">
                    <div className="card" style={{ width: "13rem" }}>

                        <img src={src} className="card-img-top" alt={alt}></img>

                        <div className='categories-discount' >
                            <h5 className="card-categories">{categories}</h5>

                            <h5 className="card-discount">{discount}</h5>
                        </div>
                    </div>

                </div >
                {/* </Link> */}
            </div ></>
    )
}

export default OffersCard