import {React,useState,useEffect} from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import {FaMagnifyingGlass,FaHouseChimney,FaCalendar,FaTv,FaCreditCard,FaPlus,FaGlobe} from 'react-icons/fa6'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {BiDislike,BiLike} from 'react-icons/bi'
import {FcLike} from 'react-icons/fc'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination} from 'swiper/modules';
import 'swiper/css';
// Import Swiper styles
import 'swiper/css';
import './Movie.css'
const Movie = () => {
    
    let URL_API="https://api.themoviedb.org/3";
    let APIKEY="api_key=ec5b719762fe595a07722cd3bf77dc45";
    let IMAGE_URL="https://image.tmdb.org/t/p/original";
    let movie=URL_API+"/discover/movie?"+ APIKEY;
    let movie2=URL_API+"/movie/top_rated?"+ APIKEY;
    let Action=URL_API+"/discover/movie?"+ APIKEY+"&with_genres=28";
    let Comedy=URL_API+"/discover/movie?"+ APIKEY+"&with_genres= 35";
    let Love=URL_API+"/discover/movie?"+ APIKEY+"&with_genres=10749";
    let Horror=URL_API+"/discover/movie?"+ APIKEY+"&with_genres=27";
    useEffect(()=>{
        fetch(movie).then(response=>response.json())
        .then(data=>{
            console.log(data.results)
            const result=data.results[Math.floor(Math.random()*data.results.length-1)];
    
            let section1=document.querySelector('.One')
            let title=document.querySelector('.title')
            let discription=document.querySelector('.discription')
    
            section1.style.backgroundImage=`url(${ IMAGE_URL+result.poster_path})`
            section1.style.backgroundRepeat='no-repeat'
            section1.style.backgroundSize='100% 100%'
            section1.style.backgroundPosition='center'
    
            title.innerHTML=result.title;
            discription.innerHTML=result.overview.substr(0,50);
            console.log(data.results);
            // let DataResult=data.results;
            // ShowMovie(DataResult);
        })
    },[])
    const [film,setfilm]=useState([]);
    useEffect(()=>{
        fetch(movie2).then(response=>response.json())
        .then(data=>
            setfilm(data.results)
            )
        },[])
    const [film2,setfilm2]=useState([]);
    useEffect(()=>{
        fetch(Action).then(response=>response.json())
        .then(data=>
            setfilm2(data.results)
            )
        },[])
    const [film3,setfilm3]=useState([]);
    useEffect(()=>{
        fetch(Comedy).then(response=>response.json())
        .then(data=>
            setfilm3(data.results)
            )
        },[])
    const [film4,setfilm4]=useState([]);
    useEffect(()=>{
        fetch(Love).then(response=>response.json())
        .then(data=>
            setfilm4(data.results)
            )
        },[])
    const [film5,setfilm5]=useState([]);
    useEffect(()=>{
        fetch(Horror).then(response=>response.json())
        .then(data=>
            setfilm5(data.results)
            )
        },[])
    return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <img src="images/Logonetflix.png" alt="#"/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/">TV Shows</a>
                        </li>
                        <li className="nav-item ">
                        <a className="nav-link" href="/" id="navbarDropdown">
                            Movies
                        </a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="/" tabindex="-1" aria-disabled="true">New & Popular</a>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
        <aside>
            <a href="/"><i><FaMagnifyingGlass/></i></a>
            <a href="/"><i><FaHouseChimney/></i></a>
            <a href="/"><i><FaCalendar/></i></a>
            <a href="/"><i><FaTv/></i></a>
            <a href="/"><i><FaCreditCard/></i></a>
            <a href="/"><i><FaPlus/></i></a>
        </aside>
        <section className="One">
        <div className="information">
            <h2 className="title"></h2>
            <div className="button">
            <button>Watch</button>
            <button>MoreInfo</button>
            </div>
            <p className="discription"></p>
        </div>
        </section>

        <section className="Two">
                <div>
                <h1>Top_Rate</h1>
                <Swiper
                    slidesPerView="auto"
                    spaceBetween={30}
                    pagination={{
                    clickable: true,
                    }}
                    breakpoints={{
                        576: {
                            width: 576,
                            slidesPerView: 1,
                        },
                        768: {
                            width: 768,
                            slidesPerView: 2,
                        },
                    }} 
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        film.map((F)=>(
                            <SwiperSlide key={F.id}>
                                <img src={IMAGE_URL+F.poster_path} alt="/#" />
                                <div className='Rate'>
                                    <h5>{F.title}</h5>
                                    <div className='icons'>
                                        <i><BiLike/></i>
                                        <i><BiDislike/></i>
                                        <i><AiOutlinePlusCircle/></i>
                                        <i><FcLike/></i>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                        }
                </Swiper>
                </div>
                <div>
                    <h1>Action</h1>
                <Swiper
                    slidesPerView="auto"
                    spaceBetween={30}
                    pagination={{
                    clickable: true,
                    }}
                    breakpoints={{
                        576: {
                            width: 576,
                            slidesPerView: 2,
                        },
                        768: {
                            width: 768,
                            slidesPerView: 3,
                        },
                    }} 
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        film2.map((F)=>(
                            <SwiperSlide key={F.id}>
                                <img src={IMAGE_URL+F.poster_path} alt="/#" />
                                <div className='Rate'>
                                    <h5>{F.title}</h5>
                                    <div className='icons'>
                                        <i><BiLike/></i>
                                        <i><BiDislike/></i>
                                        <i><AiOutlinePlusCircle/></i>
                                        <i><FcLike/></i>
                                    </div>
                                    </div>
                            </SwiperSlide>
                        ))
                        }
                </Swiper>
                </div>
                <div>
                    <h1>Comedy</h1>
                <Swiper
                    slidesPerView='auto'
                    spaceBetween={30}
                    pagination={{
                    clickable: true,
                    }}
                    breakpoints={{
                        576: {
                            width: 576,
                            slidesPerView: 1,
                        },
                        768: {
                            width: 768,
                            slidesPerView: 2,
                        },
                    }} 
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        film3.map((F)=>(
                            <SwiperSlide key={F.id}>
                                <img src={IMAGE_URL+F.poster_path} alt="/#" />
                                <div className='Rate'>
                                    <h5>{F.title}</h5>
                                    <div className='icons'>
                                        <i><BiLike/></i>
                                        <i><BiDislike/></i>
                                        <i><AiOutlinePlusCircle/></i>
                                        <i><FcLike/></i>
                                    </div>
                                    </div>
                            </SwiperSlide>
                        ))
                        }
                </Swiper>
                </div>
                <div>
                <h1>Romance</h1>
                <Swiper
                    slidesPerView='auto'
                    spaceBetween={30}
                    pagination={{
                    clickable: true,
                    }}
                    breakpoints={{
                        576: {
                            width: 576,
                            slidesPerView: 2,
                        },
                        768: {
                            width: 768,
                            slidesPerView: 3,
                        },
                    }}       
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        film4.map((F)=>(
                            <SwiperSlide key={F.id}>
                                <img src={IMAGE_URL+F.poster_path} alt="/#" />
                                <div className='Rate'>
                                    <h5>{F.title}</h5>
                                    <div className='icons'>
                                        <i><BiLike/></i>
                                        <i><BiDislike/></i>
                                        <i><AiOutlinePlusCircle/></i>
                                        <i><FcLike/></i>
                                    </div>
                                    </div>
                            </SwiperSlide>
                        ))
                        }
                </Swiper>
                </div>
                <div>
                <h1>Horror</h1>
                <Swiper
                    slidesPerView="auto"
                    spaceBetween={30}
                    pagination={{
                    clickable: true,
                    }}
                    breakpoints={{
                        576: {
                            width: 576,
                            slidesPerView: 1,
                        },
                        768: {
                            width: 768,
                            slidesPerView: 2,
                        },
                    }} 
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        film5.slice(8,20).map((F)=>(
                            <SwiperSlide key={F.id}>
                                <img src={IMAGE_URL+F.poster_path} alt="/#" />
                                <div className='Rate'>
                                    <h5>{F.title}</h5>
                                    <div className='icons'>
                                        <i><BiLike/></i>
                                        <i><BiDislike/></i>
                                        <i><AiOutlinePlusCircle/></i>
                                        <i><FcLike/></i>
                                    </div>
                                    </div>
                            </SwiperSlide>
                        ))
                        }
                </Swiper>
                </div>
        </section>

        <hr/>
    <Container className='footer'>
        <a href="/">Questions? Contact us.</a>
        <Row className="PerantLink">
            <Col className="links" md={4} sm={6} xm={12} >
                <a href="/">FAQ</a>
                <a href="/">Media Center</a>
                <a href="/">Ways to Watch</a>
                <a href="/">Cookie Preference</a>
                <a href="/">Speed Test</a>
            </Col>
            <Col className="links"  md={4} sm={6} xm={12}>
                <a href="/">Help Center</a>
                <a href="/">Investor Relations</a>
                <a href="/">Terms of Use</a>
                <a href="/">Corporate Information</a>
                <a href="/">Legal Notices</a>
            </Col>
            <Col className="links"  md={4} sm={6} xm={12}>
                <a href="/">Account</a>
                <a href="/">Jobs</a>
                <a href="/">Privacy</a>
                <a href="/">Contact Us</a>
                <a href="/">Only on Netflix</a>
            </Col>
        </Row>
        <div className="language">
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

export default Movie
