import React from 'react'

function Header() {
    return (<>
        <>

            <div className="nav-container ">
                <nav className="navbar navbar-dark navbar-expand-lg navbar-banner">
                    <div className="container-fluid  fixed-top">
                        <a className="navbar-brand" href="#">
                            {/* <PetsIcon ></PetsIcon> */}
                            Pet Shop</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/home">Home</a>
                                </li>
                                {/* categories */}
                                <li className="nav-item catg ">
                                    <select name="" id="catg">
                                        <option value="X">Categories</option>
                                        <option value="">Dog</option>
                                        <option value="">Cat</option>
                                        <option value="">Fish</option>
                                        <option value="">Parrots</option>
                                        <option value="">Horse</option>
                                        <option value="">Lizard</option>
                                        <option value="">Squirell</option>
                                        <option value="">Sugar Glider</option>

                                    </select>
                                </li>

                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </ul>
                            <form className='login-signin'>
                                <button className="btn btn-outline-primary" type="submit">Log In</button>
                                <button className="btn btn-outline-primary" type="submit">Sign Up</button>
                            </form>
                        </div></div>
                </nav></div>

        </></>
    )
}

export default Header