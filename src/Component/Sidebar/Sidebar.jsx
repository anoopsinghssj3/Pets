import React from 'react'

function Sidebar() {
    return (<>

        <div className="sidebar">
            <div className="d-flex  flex-column flex-shrink-0 p-3 text-white bg-dark" style={{
                width: "17.5rem",
                height: "40rem"
            }}>
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <svg className="bi me-2" width="40" height="32">
                        <use xlinkHref="#bootstrap" />
                    </svg>
                    <span className="fs-4">Dashboard</span>
                </a>
                <hr />
                <div className="dropdown">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/demo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                        <strong>Aqua Team</strong>
                    </a>

                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                    <hr />

                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            <a href="#" className="nav-link active" aria-current="page">
                                <svg className="bi me-2" width="16" height="16">
                                    <use xlinkHref="#home" />
                                </svg>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-white">
                                <svg className="bi me-2" width="16" height="16">
                                    <use xlinkHref="#speedometer2" />
                                </svg>
                                Profile
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-white">
                                <svg className="bi me-2" width="16" height="16">
                                    <use xlinkHref="#table" />
                                </svg>
                                My Orders
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-white">
                                <svg className="bi me-2" width="16" height="16">
                                    <use xlinkHref="#grid" />
                                </svg>
                                My Cart
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-white">
                                <svg className="bi me-2" width="16" height="16">
                                    <use xlinkHref="#people-circle" />
                                </svg>
                                Wish List
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-white">
                                <svg className="bi me-2" width="16" height="16">
                                    <use xlinkHref="#people-circle" />
                                </svg>
                                Products
                            </a>
                        </li>

                    </ul>
                    <hr />
                </div>
            </div>
        </div>
    </>
    )
}

export default Sidebar