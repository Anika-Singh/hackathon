import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class Header extends Component {
    render() {
        return(
            //navivation bar
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div class="container">
                    <a class="navbar-brand" href="#page-top"><img src="/assets/assets/img/haven_logo.png" alt="..." /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i class="fas fa-bars ms-1"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                            <li class="nav-item"><a class="nav-link" href="#purpose">Purpose</a></li>
                            <li class="nav-item"><a class="nav-link" href="#portfolio">Cities</a></li>
                            <li class="nav-item"><a class="nav-link" href="#team">Team</a></li>
                            <li class="nav-item"><a class="nav-link" href="#contact">Sign Up</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
} export default Header;