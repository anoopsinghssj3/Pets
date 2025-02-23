import React from 'react'
import  '../../App.css'
function Hero() {
    return (<>

        <div className="jumbotron">
            {/* <button id='jumboCloseBtn'><CloseIcon></CloseIcon></button> */}
            <h1 className="display-4">Welcome to Pet Shop! 🐾</h1>
            <p className="lead"></p>
            <hr className="my-4" />
            <p> Discover a world of wonderful pets waiting to meet you. Find the perfect addition to your family and bring home joy, loyalty, and love today! 🐶🐱</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </p>
        </div>
    </>
    )
}

export default Hero