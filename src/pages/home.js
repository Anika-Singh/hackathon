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
                            <h2 class="section-heading text-uppercase">Cities</h2>
                            <h3 class="section-subheading text-muted">Find your perfect home in the city!</h3>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 col-sm-6 mb-4">
                                {/* <!-- Portfolio item 1--> */}
                                <div class="portfolio-item">
                                    <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                                        <div class="portfolio-hover">
                                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                                        </div>
                                        <img class="img-fluid" src="/assets/assets/img/portfolio/austin.jpg" alt="..." />
                                    </a>
                                    <div class="portfolio-caption">
                                        <div class="portfolio-caption-heading">Austin</div>
                                        <div class="portfolio-caption-subheading text-muted">Weird!</div>
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
                                        <img class="img-fluid" src="/assets/assets/img/portfolio/houston.jpeg" alt="..." />
                                    </a>
                                    <div class="portfolio-caption">
                                        <div class="portfolio-caption-heading">Houston</div>
                                        <div class="portfolio-caption-subheading text-muted">It's a triple H! Hot and Humid Houston!</div>
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
                                        <img class="img-fluid" src="/assets/assets/img/portfolio/la.jpeg" alt="..." />
                                    </a>
                                    <div class="portfolio-caption">
                                        <div class="portfolio-caption-heading">Los Angeles</div>
                                        <div class="portfolio-caption-subheading text-muted">LALALAnd!</div>
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
                                        <img class="img-fluid" src="/assets/assets/img/portfolio/seattle.webp" alt="..." />
                                    </a>
                                    <div class="portfolio-caption">
                                        <div class="portfolio-caption-heading">Seattle</div>
                                        <div class="portfolio-caption-subheading text-muted">Find your McDreamy here!</div>
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
                                        <img class="img-fluid" src="/assets/assets/img/portfolio/newyork.jpeg" alt="..." />
                                    </a>
                                    <div class="portfolio-caption">
                                        <div class="portfolio-caption-heading">New York</div>
                                        <div class="portfolio-caption-subheading text-muted">Concret jungle where dreams are made of!</div>
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
                                        <img class="img-fluid" src="/assets/assets/img/portfolio/chicago.jpeg" alt="..." />
                                    </a>
                                    <div class="portfolio-caption">
                                        <div class="portfolio-caption-heading">Chicago</div>
                                        <div class="portfolio-caption-subheading text-muted">Windy City!</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- About--> */}
                
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
                                    <img class="mx-auto rounded-circle" src="/assets/assets/img/team/1.png" alt="..." />
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
                {/* <Signin /> */}
               
               {/* <!-- sign in--> */}
               <section class="page-section" id="contact">
                    <div class="container">
                        <div class="text-center">
                            <h2 class="section-heading text-uppercase">Sign Up</h2>
                            <h3 class="section-subheading text-muted">Sign up to discover your safe haven!</h3>
                        </div>
                        {/* <!-- * * * * * * * * * * * * * * *-->
                        <!-- * * SB Forms Contact Form * *-->
                        <!-- * * * * * * * * * * * * * * *-->
                        <!-- This form is pre-integrated with SB Forms.-->
                        <!-- To make this form functional, sign up at-->
                        <!-- https://startbootstrap.com/solution/contact-forms-->
                        <!-- to get an API token!--> */}
                        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                            <div class="row align-items-stretch mb-5">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        {/* <!-- Name input--> */}
                                        <input class="form-control" id="name" type="text" placeholder="Your Name *" data-sb-validations="required" />
                                        <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                    </div>
                                    <div class="form-group">
                                        {/* <!-- Email address input--> */}
                                        <input class="form-control" id="email" type="email" placeholder="Your Email *" data-sb-validations="required,email" />
                                        <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                        <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                    </div>
                                    <div class="form-group">
                                        {/* <!-- Phone number input--> */}
                                        <input class="form-control" id="phone" type="tel" placeholder="Your Phone *" data-sb-validations="required" />
                                        <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                    </div>
                                    <div class="form-group">
                                        {/* <!-- Current City input--> */}
                                        <input class="form-control" id="city" type="city" placeholder="Your Current City *" data-sb-validations="required" />
                                        <div class="invalid-feedback" data-sb-feedback="city:required">Current City is required.</div>
                                    </div>
                                    <div class="form-group">
                                        {/* <!-- Neighborhood input--> */}
                                        <input class="form-control" id="phone" type="tel" placeholder="Your Current Neighborhood *" data-sb-validations="required" />
                                        <div class="invalid-feedback" data-sb-feedback="neighborhood:required">A phone number is required.</div>
                                    </div>
                            
                                    <h6> </h6>
                                    <h6>Safety Rate
                                        <select name="selectList" id="selectList">
                                              <option value="option 1">1</option>
                                              <option value="option 2">2</option>
                                            <option value="option 3">3</option>
                                            <option value="option 4">4</option>
                                            <option value="option 5">5</option>
                                        </select>
                                    </h6>
                                    <h6>Loudness
                                        <select name="selectList" id="selectList">
                                              <option value="option 1">1</option>
                                              <option value="option 2">2</option>
                                            <option value="option 3">3</option>
                                            <option value="option 4">4</option>
                                            <option value="option 5">5</option>
                                        </select>
                                    </h6>                                   
                                    <h6>Accessibility
                                        <select name="selectList" id="selectList">
                                              <option value="option 1">1</option>
                                              <option value="option 2">2</option>
                                            <option value="option 3">3</option>
                                            <option value="option 4">4</option>
                                            <option value="option 5">5</option>
                                        </select>
                                    </h6>
                                    <h6>Schools Nearby
                                        <select name="selectList" id="selectList">
                                              <option value="option 1">Yes</option>
                                              <option value="option 2">No</option>
                                        </select>
                                    </h6>
                                    <h6>How much would you recommend to your close friends?
                                        <select name="selectList" id="selectList">
                                              <option value="option 1">Very much</option>
                                              <option value="option 2">Much</option>
                                            <option value="option 3">Neutral</option>
                                            <option value="option 4">No</option>
                                            <option value="option 5">Never</option>
                                        </select>
                                    </h6>
                                    
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group form-group-textarea mb-md-0">
                                        {/* <!-- Message input--> */}
                                        <textarea class="form-control" id="comment" placeholder="Your Comment *" data-sb-validations="required"></textarea>
                                        <div class="invalid-feedback" data-sb-feedback="message:required">A comment is required.</div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Submit success message-->
                            <!---->
                            <!-- This is what your users will see when the form-->
                            <!-- has successfully submitted--> */}
                            <div class="d-none" id="submitSuccessMessage">
                                <div class="text-center text-white mb-3">
                                    <div class="fw-bolder">Sign up successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                </div>
                            </div>
                            {/* <!-- Submit error message-->
                            <!---->
                            <!-- This is what your users will see when there is-->
                            <!-- an error submitting the form--> */}
                            <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error signing up!</div></div>
                            {/* <!-- Submit Button--> */}
                            <div class="text-center">
                                {/* <a href="#cities">
                                    <button class="btn btn-primary btn-xl text-uppercase disabled" id="submitButton" type="submit">Sign Up</button>
                                </a> */}


                                <a class="btn btn-primary btn-xl text-uppercase" href="#portfolio">Sign Up</a>
                            </div>
                        </form>
                    </div>
                </section>
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