import React from 'react'
import {Link} from "react-router-dom"


const Navbar = () => {
    return (
        <>
            {/* <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>This website is only design to show implementation of REACT-ROUTER-DOM</strong>
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div> */}

            <nav className="navbar navbar-expand-lg  navbar navbar-dark  " style={{ backgroundColor: "#15273a" }} >
                <Link className="navbar-brand" to="/" style={{ color: "Red" }}>Shoe Store</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-row-reverse" id="navbarNav" style={{ marginRight: "150px" }}>
                    <ul className="navbar-nav ">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/" style={{ color: "Red" }}>Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/basket" style={{ color: "Red" }}>Basket</Link>
                        </li>

                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Navbar
