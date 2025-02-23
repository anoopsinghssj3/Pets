import React from 'react'
import '../../../App.css'

function TestimonyCard({ src, alt, name, review }) {
    return (<>
        <div className="col">
            <div className="testimony-card">
                {/* card */}
                <div className="card" style={{ width: "14rem" }}>

                    <img src={src} className="card-img-top" alt={alt}></img>

                    <div className='name-review' >
                        <h5 className="card-name">{name}</h5>
                        <p className='card-review'>{review}</p>
                        <button className='more'>Read More</button>
                    </div>
                </div>

            </div >
        </div>

    </>
    )
}

export default TestimonyCard