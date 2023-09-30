import React from 'react'
import {Link } from 'react-router-dom'
import { Container,Row,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { FaGlobe,FaDownload } from "react-icons/fa6";
const Home = () => {
  return (
    <div>
        <header>
        <img src="images/Logonetflix.png" alt="#"/>
        <div className="language">
            <i><FaGlobe/></i>
            <select>
                <option value="English">English</option>
                <option value="Arabic">Arabic</option>
            </select>
            <Link to="/sigin" target="_blank">SignIn</Link>
        </div>
        </header>

        <section className="one" style={{
            backgroundImage: 'url(/images/background.jpg)',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
        }}>
        <div className="data">
            <h1>Unlimited movies, TV shows, and more</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
        </div>
            <div className="form">
                <input type="email" id="email" placeholder="Email Address"/>
                <a href="/"><button type="submit" id="submit">Get Started <i className="fa-solid fa-angle-right"></i></button></a>
            </div>
        </section>
        <hr/>
        <Container className='two'>
                <Row id='rowOne'>
                    <Col md={6} sm={12} className='info'>
                        <h1>Enjoy on your TV</h1>
                        <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
                    </Col>
                    <Col md={6} sm={12} className='video'>
                        <div className='imageCover'>
                            <img src="images/tv.png" alt="#"/>
                        </div>
                        <div className='videoCover'>
                            <video src="images/video-tv-0819 copy.m4v" autoplay loop></video>
                        </div>
                    </Col>
                </Row>
        </Container> 
        <hr/>
        <Container className='three'>
                    <Row className='Rthree'>
                            <Col md={6} sm={12} className='info'>
                                <h1>Download your shows to watch offline</h1>
                                <p>Save your favorites easily and always have something to watch.</p>
                            </Col>
                            <Col  md={6} sm={12} className='loading'>
                                <div className="Download">
                                    <img src="images/boxshot.png" alt="#"/>
                                    <div className="Stranger">
                                        <h3>Stranger Things</h3>
                                        <span>Download.....</span>
                                    </div>
                                    <button onclick="loading()">
                                        <i><FaDownload/></i>
                                        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                                    </button>
                                </div>
                                <div className='photo'>
                                    <img src="images/mobile-0819.jpg" alt="#"/>
                                </div>
                            </Col>
                    </Row>
        </Container>
        <hr/>
        <Container class="four">
            <Row id="rowOne">
                <Col md={6} sm={12} className='info'>
                    <h1>Watch everywhere</h1>
                    <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                </Col>
                <Col md={6} sm={12} className='video'>
                    <div className='imageCover'>
                        <img src="images/device-pile.png" alt="#"/>
                    </div>
                    <div className='videoCover2'>
                        <video src="images/video-devices.m4v" autoplay loop></video>
                    </div>
                </Col>
            </Row>
        </Container>
        <hr/>
        <Container className='five'>
            <Row className='Rthree'>
                <Col md={6} sm={12} className='info'>
                    <h1>Create profiles for kids</h1>
                    <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                </Col>
                <Col md={6} sm={12}>
                <div className='imageCover'>
                    <img src="images/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png" alt="#"/>
                </div>
                </Col>
            </Row>
        </Container>
        <hr/>
        <Container>
        <Row className='heading'>
            <h1>Frequently Asked Questions</h1>
        </Row>
        <Row>
            <details>
                <summary>What is Netflix?</summary>
                    <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                        You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
            </details>
            <details>
                <summary>How much does Netflix cost?</summary>
                    <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from 70 ج.م. to 165 ج.م. a month. No extra costs, no contracts.</p>
            </details>
            <details>
                <summary>Where can I watch?</summary>
                    <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                        You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
            </details>
            <details>
                <summary>How do I cancel?</summary>
                    <p>Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
            </details>
            <details>
                <summary>What can I watch on Netflix?</summary>
                    <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
            </details>
            <details>
                <summary>Is Netflix good for kids?</summary>
                    <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
                        Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
            </details>
        </Row>
        <div class="row ready  justify-content-center">
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div class="form">
                <input type="email" placeholder="Email Address" class="email2" required />
                <a href="movie.html" class="submit2" target="_blank"><button type="submit">Get Started <i class="fa-solid fa-angle-right"></i></button></a>
            </div>
        </div>
        </Container>
        <hr/>
        <Container className='footer'>
            <a href="/">Questions? Contact us.</a>
        <Row>
            <Col md={4} sm={12} className='links'>
                <a href="/">FAQ</a>
                <a href="/">Media Center</a>
                <a href="/">Ways to Watch</a>
                <a href="/">Cookie Preference</a>
                <a href="/">Speed Test</a>
            </Col>
            <Col md={4} sm={12} className='links'>
                <a href="/">Help Center</a>
                <a href="/">Investor Relations</a>
                <a href="/">Terms of Use</a>
                <a href="/">Corporate Information</a>
                <a href="/">Legal Notices</a>
            </Col>
            <Col md={4} sm={12} className='links'>
                <a href="/">Account</a>
                <a href="/">Jobs</a>
                <a href="/">Privacy</a>
                <a href="/">Contact Us</a>
                <a href="/">Only on Netflix</a>
            </Col>
        </Row>
        <div class="language">
            <i><FaGlobe/></i>
            <select>
                <option value="English">English</option>
                <option value="Arabic">Arabic</option>
            </select>
        </div>
        </Container>

    </div>
    )
}

export default Home
