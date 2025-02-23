import React from 'react'

function PetDisplayCard({ src_i1, src_i2, src_i3, src_i4, src, alt, title, description, oldPrice, newPrice, trend }) {
    return (<>
        <div className="pet-display-card">
            {/* productlist left side */}

            <div className="left-side">
                <div className="card-imgList" style={{ width: "13rem" }}>
                    <img src={src_i1} className="card-img-top" alt="..." />
                    <img src={src_i2} className="card-img-top" alt="..." />
                    <img src={src_i3} className="card-img-top" alt="..." />
                    <img src={src_i4} className="card-img-top" alt="..." />
                </div>
                {/* display-main-product */}
                <div className="display-main-pet">
                    <img src={src} className="card-img-top" alt={alt} />
                </div>
            </div>
            <div className="right-side">
                <h2>{title}</h2>

                <div className="display-description"> {description}</div>
                <div className="display-prices">
                    <div className='old-price'>{oldPrice}&#8377;</div>
                    <div className='new-price'>{newPrice}&#8377;</div>
                </div>
                <div className="display-star">
                    {/* display 5 star rating by star or by symbols */}
                    {/* <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" /> */}
                    <span >&#10025;</span>
                    <span >&#10025;</span>
                    <span >&#10025;</span>
                    <span >&#10025;</span>
                    <span >&#10025;</span>
                    <p>(rating in numbers:122)</p>
                </div>

                <div className="display-size">
                    <h2>select size</h2>
                    <div className="display-sizes">
                        <div>Baby</div>
                        <div>Young</div>
                        <div>Adult</div>
                    </div>

                </div>
                <button>Add to Cart</button>
                <p className='right-side-display-pet-trend'>
                    {/* <span>trend: hot/latest/none</span> */}
                </p>
            </div>


        </div>

    </>
    )
}

export default PetDisplayCard