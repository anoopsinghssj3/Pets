import React from 'react'

function Footer() {
    return (<div className="footer">
        <footer className="bd-footer py-4 py-md-5 mt-5 bg-body-tertiary ">
            <div className="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
                <div className="row">
                    <div className="col-lg-3 mb-4">
                        <a className="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none" href="/" aria-label="Bootstrap">
                            {/* <PetsIcon></PetsIcon> */}
                            <span className="fs-5">Aqua Team</span>
                        </a>
                        <ul className="list-unstyled small">
                            <li className="mb-2">Currently v1.0</li>

                            <li className='socialMedia-icon'>
                                <img src="../src/Component/Images/fb.png" alt="fb logo" />
                                <img src="../src/Component/Images/insta.png" alt="insta logo" />
                                <img src="../src/Component/Images/linkdin.png" alt="linkdin logo" />
                                <img src="../src/Component/Images/youtube.png" alt="youtube logo" />

                            </li>

                        </ul>
                    </div>
                    <div className="col-6 col-lg-2 offset-lg-1 mb-3">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="/">Home</a></li>
                            <li className="mb-2"><a href="/">Themes</a></li>
                            <li className="mb-2"><a href="/">Blog</a></li>
                            <li className="mb-2"><a href="/" target="_blank" rel="noopener"> Store</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-2 mb-3">
                        <h5>Guides By</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#">Sir</a></li>
                            <li className="mb-2"><a href="#">Mam</a></li>
                            <li className="mb-2"><a href="#">Mam</a></li>

                        </ul>
                    </div>
                    <div className="col-6 col-lg-2 mb-3">
                        <h5>Projects</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" target="_blank" rel="noopener">Pets Shop</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-lg-2 mb-3">
                        <h5>Community</h5>
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#" target="_blank" rel="noopener">Issues</a></li>
                            <li className="mb-2"><a href="#" target="_blank" rel="noopener">Discussions</a></li>
                            <li className="mb-2"><a href="#" target="_blank" rel="noopener">Community Members</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='copyright'>&copy;copyright@2024</div>
        </footer>
    </div>


    )
}

export default Footer