import React from "react";
import './navbar.css';

export const Navbar = () =>{
    return(
           <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Express</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/home">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">About us</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Our services
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Lorem ipsum</a></li>
                        <li><a class="dropdown-item" href="#">Lorem ipsum</a></li>
                        <li><a class="dropdown-item" href="#">Lorem ipsum</a></li>
                        <li><a class="dropdown-item" href="#">Lorem ipsum</a></li>
                    </ul>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled">Contact us</a>
                    </li>
                </ul>
                <form class="d-flex">
                    <button className='btn'>Call us</button>
                </form>
                </div>
            </div>
        </nav>
    )
}