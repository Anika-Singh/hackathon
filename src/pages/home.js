import React, { Component } from 'react';

import Header from '../components/header';
import Footer from '../components/footer';
import Signin from './/signin';


class Home extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header />
                <header class="masthead">
                    <div class="container">
                        <div class="masthead-subheading">Welcome To Haven!</div>
                        <div class="masthead-heading text-uppercase">Your safehouse away from home.</div>
                        <a class="btn btn-primary btn-xl text-uppercase" href="#values">Tell Me More</a>
                    </div>

                    <section class="page-section" id="values">
                        <div class="container">
                            <div class="text-center">
                                <h2 class="section-heading text-uppercase">Values</h2>
                                {/* <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> */}
                            </div>
                            <div class="row text-center">
                                <div class="col-md-4">
                                    <span class="fa-stack fa-4x">
                                        <i class="fas fa-circle fa-stack-2x text-primary"></i>
                                        <i class="fas fa-child fa-stack-1x fa-inverse"></i>
                                    </span>
                                    <h4 class="my-3">Community</h4>
                                    <p class="text-muted">We strive to create a safe community for females to find housing in new areas. A trusted community is a must to cultivate a system of safehouses that are reliable to find your new haven away from home.</p>
                                </div>
                                <div class="col-md-4">
                                    <span class="fa-stack fa-4x">
                                        <i class="fas fa-circle fa-stack-2x text-primary"></i>
                                        <i class="fas fa-bed fa-stack-1x fa-inverse"></i>
                                    </span>
                                    <h4 class="my-3">Comfort</h4>
                                    <p class="text-muted">Your home away from home will situated only in housing that we and our users love living in. Comfort is key to making your stay an enjoyable experience.</p>
                                </div>
                                <div class="col-md-4">
                                    <span class="fa-stack fa-4x">
                                        <i class="fas fa-circle fa-stack-2x text-primary"></i>
                                        <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
                                    </span>
                                    <h4 class="my-3">Safety</h4>
                                    <p class="text-muted">Safety is our #1 priority. Your haven will be rated based off data on the neighborhood and more importantly, how previous residents felt. We want to give you total peace of mind while living in a new area.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </header>

                <section class="page-section bg-light" id="portfolio">
                    <div class="container">
                        <div class="text-center">
                            <h2 class="section-heading text-uppercase">Portfolio</h2>
                            <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 col-sm-6 mb-4">
                                {/* <!-- Portfolio item 1--> */}
                                <div class="portfolio-item">
                                    <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                                        <div class="portfolio-hover">
                                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                        </div>
                                        <img class="img-fluid" src="/assets/assets/img/portfolio/1.jpg" alt="..." />
                                    </a>
                                    <div class="portfolio-caption">
                                        <div class="portfolio-caption-heading">Threads</div>
                                        <div class="portfolio-caption-subheading text-muted">Illustration</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6 mb-4">
                                {/* <!-- Portfolio item 2--> */}
                                <div class="portfolio-item">
                                    <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                                        <div class="portfolio-hover">
                                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                        </div>
                                        <img class="img-fluid" src="/assets/assets/img/portfolio/2.jpg" alt="..." />
                                    </a>
                                    <div class="portfolio-caption">
                                        <div class="portfolio-caption-heading">Explore</div>
                                        <div class="portfolio-caption-subheading text-muted">Graphic Design</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6 mb-4">
                                {/* <!-- Portfolio item 3--> */}
                                <div class="portfolio-item">
                                    <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                                        <div class="portfolio-hover">
                                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                        </div>
                                        <img class="img-fluid" src="/assets/assets/img/portfolio/3.jpg" alt="..." />
                                    </a>
                                    <div class="portfolio-caption">
                                        <div class="portfolio-caption-heading">Finish</div>
                                        <div class="portfolio-caption-subheading text-muted">Identity</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                                {/* <!-- Portfolio item 4--> */}
                                <div class="portfolio-item">
                                    <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
                                        <div class="portfolio-hover">
                                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                        </div>
                                        <img class="img-fluid" src="/assets/assets/img/portfolio/4.jpg" alt="..." />
                                    </a>
                                    <div class="portfolio-caption">
                                        <div class="portfolio-caption-heading">Lines</div>
                                        <div class="portfolio-caption-subheading text-muted">Branding</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                                {/* <!-- Portfolio item 5--> */}
                                <div class="portfolio-item">
                                    <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
                                        <div class="portfolio-hover">
                                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                        </div>
                                        <img class="img-fluid" src="/assets/assets/img/portfolio/5.jpg" alt="..." />
                                    </a>
                                    <div class="portfolio-caption">
                                        <div class="portfolio-caption-heading">Southwest</div>
                                        <div class="portfolio-caption-subheading text-muted">Website Design</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-6">
                                {/* <!-- Portfolio item 6--> */}
                                <div class="portfolio-item">
                                    <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                                        <div class="portfolio-hover">
                                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                        </div>
                                        <img class="img-fluid" src="/assets/assets/img/portfolio/6.jpg" alt="..." />
                                    </a>
                                    <div class="portfolio-caption">
                                        <div class="portfolio-caption-heading">Window</div>
                                        <div class="portfolio-caption-subheading text-muted">Photography</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- About--> */}
                <section class="page-section" id="about">
                    <div class="container">
                        <div class="text-center">
                            <h2 class="section-heading text-uppercase">About</h2>
                            <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <ul class="timeline">
                            <li>
                                <div class="timeline-image"><img class="rounded-circle img-fluid" src="/assets/assets/img/about/1.jpg" alt="..." /></div>
                                <div class="timeline-panel">
                                    <div class="timeline-heading">
                                        <h4>2009-2011</h4>
                                        <h4 class="subheading">Our Humble Beginnings</h4>
                                    </div>
                                    <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                                </div>
                            </li>
                            <li class="timeline-inverted">
                                <div class="timeline-image"><img class="rounded-circle img-fluid" src="/assets/assets/img/about/2.jpg" alt="..." /></div>
                                <div class="timeline-panel">
                                    <div class="timeline-heading">
                                        <h4>March 2011</h4>
                                        <h4 class="subheading">An Agency is Born</h4>
                                    </div>
                                    <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                                </div>
                            </li>
                            <li>
                                <div class="timeline-image"><img class="rounded-circle img-fluid" src="/assets/assets/img/about/3.jpg" alt="..." /></div>
                                <div class="timeline-panel">
                                    <div class="timeline-heading">
                                        <h4>December 2015</h4>
                                        <h4 class="subheading">Transition to Full Service</h4>
                                    </div>
                                    <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                                </div>
                            </li>
                            <li class="timeline-inverted">
                                <div class="timeline-image"><img class="rounded-circle img-fluid" src="/assets/assets/img/about/4.jpg" alt="..." /></div>
                                <div class="timeline-panel">
                                    <div class="timeline-heading">
                                        <h4>July 2020</h4>
                                        <h4 class="subheading">Phase Two Expansion</h4>
                                    </div>
                                    <div class="timeline-body"><p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p></div>
                                </div>
                            </li>
                            <li class="timeline-inverted">
                                <div class="timeline-image">
                                    <h4>
                                        Be Part
                                        <br />
                                        Of Our
                                        <br />
                                        Story!
                                    </h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                {/* <!-- Team--> */}
                <section class="page-section bg-light" id="team">
                    <div class="container">
                        <div class="text-center">
                            <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                            <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="team-member">
                                    <img class="mx-auto rounded-circle" src="/assets/assets/img/team/1.jpg" alt="..." />
                                    <h4>Jenna Kim</h4>
                                    <p class="text-muted">ECE Junior</p>
                                    <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="team-member">
                                    <img class="mx-auto rounded-circle" src="/assets/assets/img/team/2.jpg" alt="..." />
                                    <h4>Alison Jin</h4>
                                    <p class="text-muted">ECE Junior</p>
                                    <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="team-member">
                                    <img class="mx-auto rounded-circle" src="/assets/assets/img/team/3.jpg" alt="..." />
                                    <h4>Anika Singh</h4>
                                    <p class="text-muted">ECE Junior</p>
                                    <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                        </div>
                    </div>
                </section>
                {/* <!-- Clients-->
                <div class="py-5">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-md-3 col-sm-6 my-3">
                                <a href="#!"><img class="img-fluid img-brand d-block mx-auto" src="/assets/assets/img/logos/microsoft.svg" alt="..." /></a>
                            </div>
                            <div class="col-md-3 col-sm-6 my-3">
                                <a href="#!"><img class="img-fluid img-brand d-block mx-auto" src="/assets/assets/img/logos/google.svg" alt="..." /></a>
                            </div>
                            <div class="col-md-3 col-sm-6 my-3">
                                <a href="#!"><img class="img-fluid img-brand d-block mx-auto" src="/assets/assets/img/logos/facebook.svg" alt="..." /></a>
                            </div>
                            <div class="col-md-3 col-sm-6 my-3">
                                <a href="#!"><img class="img-fluid img-brand d-block mx-auto" src="/assets/assets/img/logos/ibm.svg" alt="..." /></a>
                            </div>
                        </div>
                    </div>
                </div> */}
                <Signin />
               {/* <!-- Sign In--> */}
                {/* <!-- Footer--> */}
                
                {/* <!-- Portfolio Modals-->
                <!-- Portfolio item 1 modal popup--> */}
                <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="close-modal" data-bs-dismiss="modal"><img src="/assets/assets/img/close-icon.svg" alt="Close modal" /></div>
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-lg-8">
                                        <div class="modal-body">
                                            {/* <!-- Project details--> */}
                                            <h2 class="text-uppercase">Project Name</h2>
                                            <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                            <img class="img-fluid d-block mx-auto" src="/assets/assets/img/portfolio/1.jpg" alt="..." />
                                            <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                            <ul class="list-inline">
                                                <li>
                                                    <strong>Client:</strong>
                                                    Threads
                                                </li>
                                                <li>
                                                    <strong>Category:</strong>
                                                    Illustration
                                                </li>
                                            </ul>
                                            <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                                <i class="fas fa-times me-1"></i>
                                                Close Project
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Portfolio item 2 modal popup--> */}
                <div class="portfolio-modal modal fade" id="portfolioModal2" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="close-modal" data-bs-dismiss="modal"><img src="/assets/assets/img/close-icon.svg" alt="Close modal" /></div>
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-lg-8">
                                        <div class="modal-body">
                                            {/* <!-- Project details--> */}
                                            <h2 class="text-uppercase">Project Name</h2>
                                            <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                            <img class="img-fluid d-block mx-auto" src="/assets/assets/img/portfolio/2.jpg" alt="..." />
                                            <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                            <ul class="list-inline">
                                                <li>
                                                    <strong>Client:</strong>
                                                    Explore
                                                </li>
                                                <li>
                                                    <strong>Category:</strong>
                                                    Graphic Design
                                                </li>
                                            </ul>
                                            <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                                <i class="fas fa-times me-1"></i>
                                                Close Project
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Portfolio item 3 modal popup--> */}
                <div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="close-modal" data-bs-dismiss="modal"><img src="/assets/assets/img/close-icon.svg" alt="Close modal" /></div>
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-lg-8">
                                        <div class="modal-body">
                                            {/* <!-- Project details--> */}
                                            <h2 class="text-uppercase">Project Name</h2>
                                            <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                            <img class="img-fluid d-block mx-auto" src="/assets/assets/img/portfolio/3.jpg" alt="..." />
                                            <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                            <ul class="list-inline">
                                                <li>
                                                    <strong>Client:</strong>
                                                    Finish
                                                </li>
                                                <li>
                                                    <strong>Category:</strong>
                                                    Identity
                                                </li>
                                            </ul>
                                            <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                                <i class="fas fa-times me-1"></i>
                                                Close Project
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Portfolio item 4 modal popup--> */}
                <div class="portfolio-modal modal fade" id="portfolioModal4" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="close-modal" data-bs-dismiss="modal"><img src="/assets/assets/img/close-icon.svg" alt="Close modal" /></div>
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-lg-8">
                                        <div class="modal-body">
                                            {/* <!-- Project details--> */}
                                            <h2 class="text-uppercase">Project Name</h2>
                                            <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                            <img class="img-fluid d-block mx-auto" src="/assets/assets/img/portfolio/4.jpg" alt="..." />
                                            <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                            <ul class="list-inline">
                                                <li>
                                                    <strong>Client:</strong>
                                                    Lines
                                                </li>
                                                <li>
                                                    <strong>Category:</strong>
                                                    Branding
                                                </li>
                                            </ul>
                                            <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                                <i class="fas fa-times me-1"></i>
                                                Close Project
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Portfolio item 5 modal popup--> */}
                <div class="portfolio-modal modal fade" id="portfolioModal5" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="close-modal" data-bs-dismiss="modal"><img src="/assets/assets/img/close-icon.svg" alt="Close modal" /></div>
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-lg-8">
                                        <div class="modal-body">
                                            {/* <!-- Project details--> */}
                                            <h2 class="text-uppercase">Project Name</h2>
                                            <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                            <img class="img-fluid d-block mx-auto" src="/assets/assets/img/portfolio/5.jpg" alt="..." />
                                            <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                            <ul class="list-inline">
                                                <li>
                                                    <strong>Client:</strong>
                                                    Southwest
                                                </li>
                                                <li>
                                                    <strong>Category:</strong>
                                                    Website Design
                                                </li>
                                            </ul>
                                            <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                                <i class="fas fa-times me-1"></i>
                                                Close Project
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Portfolio item 6 modal popup--> */}
                <div class="portfolio-modal modal fade" id="portfolioModal6" tabindex="-1" role="dialog" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="close-modal" data-bs-dismiss="modal"><img src="/assets/assets/img/close-icon.svg" alt="Close modal" /></div>
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-lg-8">
                                        <div class="modal-body">
                                            {/* <!-- Project details--> */}
                                            <h2 class="text-uppercase">Project Name</h2>
                                            <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                            <img class="img-fluid d-block mx-auto" src="/assets/assets/img/portfolio/6.jpg" alt="..." />
                                            <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                            <ul class="list-inline">
                                                <li>
                                                    <strong>Client:</strong>
                                                    Window
                                                </li>
                                                <li>
                                                    <strong>Category:</strong>
                                                    Photography
                                                </li>
                                            </ul>
                                            <button class="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal" type="button">
                                                <i class="fas fa-times me-1"></i>
                                                Close Project
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
            
        )
    }
} export default Home;