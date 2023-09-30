import React from 'react'
import './sigin.css'
import { FaGlobe } from "react-icons/fa6";
const Sigin = () => {
  return (
    <>
    <div id='logo'>
        <img src="images/Logonetflix.png" alt="#"/>
    </div>
    <section class="sigin" style={{
        backgroundImage:' url("images/AE-en-20210817-popsignuptwoweeks-perspective_alpha_website_small.jpg")',
        backgroundPosition: 'center',
        backgroundRepeat:' no-repeat',
        backgroundSize: 'cover'
    }}>
        <form action="/Movie" method="get">
                <h1>SignIn</h1>
                    <label class="placeholder">UserName</label> 
                    <input type="text" name="UserName" placeholder="UserName" required/>
                    <div id="UserNameError"></div>
                <input type="text" name="Email" placeholder="Email" required/>
                <div id="EmailError"></div>
                <input type="password"name="Password" placeholder="Password" required/>
                <div id="PasswordError"></div>
                <input type="submit" value="SignIn" id="submit"/>
                <div class="checkbox flex-md-row-reverse flex-column-reverse">
                    <p>New to Netflix? <span> Sign up now.</span></p>
                <label for="checkbox"><input type="checkbox" name="checkbox" id="checkbox"/>Remember me </label>
                </div>
                <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="/">Learn more.</a></p>
            </form>
    </section>
    <footer class="container-fliud">
        <a href="/">Questions? Contact us.</a>
        <div class="row">
            <div class="links col-lg-4 col-md-6 col-12">
                <a href="/">FAQ</a>
                <a href="/">Media Center</a>
                <a href="/">Ways to Watch</a>
                <a href="/">Cookie Preference</a>
                <a href="/">Speed Test</a>
            </div>
            <div class="links col-lg-4 col-md-6 col-12">
                <a href="/">Help Center</a>
                <a href="/">Investor Relations</a>
                <a href="/">Terms of Use</a>
                <a href="/">Corporate Information</a>
                <a href="/">Legal Notices</a>
            </div>
            <div class="links col-lg-4 col-md-6 col-12">
                <a href="/">Account</a>
                <a href="/">Jobs</a>
                <a href="/">Privacy</a>
                <a href="/">Contact Us</a>
                <a href="/">Only on Netflix</a>
            </div>
        </div>
        <div class="language">
        <i><FaGlobe/></i>
            <select>
                <option value="English">English</option>
                <option value="Arabic">Arabic</option>
            </select>
        </div>
    </footer>

    </>
  )
}

export default Sigin
