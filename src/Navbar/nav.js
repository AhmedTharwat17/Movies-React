import React from "react"
import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
import './star.css'

function NavComponant() {

    const favCount = useSelector((state)=> state.favorite.numberCart )

    return(
        <React.Fragment>
            

        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>

                <div class="collapse navbar-collapse" id="navbarColor02">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item">
                        <Link to="" class="nav-link active">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/about" class="nav-link">About</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/skills" class="nav-link">Skills</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/portoflio" class="nav-link">Portoflio</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/login" class="nav-link">Login</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/registration" class="nav-link">Registration</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/ToDo" class="nav-link">ToDo</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/movies" class="nav-link">Movies</Link>
                    </li>
                </ul>
                <Link to="/favorite">
                    <div className="fav-count" class="d-flex">
                        <i class="fas fa-star text-white"></i>
                        <span className="text-white">{favCount}</span>
                    </div>
                </Link>
                </div>
            </div>
        </nav>
        </React.Fragment>
    );
}
export default NavComponant