import React from 'react'
import '../../../App.css'
function PetsCard({src,alt,title,price}) {
    return (<>

        <div className="col">
            {/* card */}
            {/* <Link to={<Product/>}> */}
            <div className="pets-card">
                <div className="card" style={{ width: "13rem" }}>

                    <img src={src} className="card-img-top" alt={alt}></img>

                    <div className='title-price' >
                        <h5 className="card-title">{title}</h5>
                        <h5 className="card-price">{price} &#8377;</h5>
                    </div>
                </div>

            </div >
            {/* </Link> */}
        </div >
    </>
    )
}

export default PetsCard