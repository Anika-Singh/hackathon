import React, { Component } from 'react';
import Cities from './/home';

class Signin extends Component {
    render() {
        return (
            <div className="wrapper">
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


                                <a class="btn btn-primary btn-xl text-uppercase" href="#cities">Sign Up</a>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        )
    }
} export default Signin;