import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../../CSSModules/HomeStyles.css'

const Services = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    }
    return (
        <>
            <section className="container my-5 px-5">
                <h1 className="text-center display-4 fw-lighter py-5">Services</h1>

                <div className='services '>
                    <Slider {...settings}>
                        <div>
                            <img src={require("../../../../../Assets/space-img1.jpg")} alt="Not Found"/>
                        </div>
                        <div>
                            <img src={require("../../../../../Assets/space-img2.jpg")} alt="Not Found"/>
                        </div>
                        <div>
                            <img src={require("../../../../../Assets/space-img3.jpg")} alt="Not Found"/>
                        </div>
                        <div>
                            <img src={require("../../../../../Assets/space-img4.jpg")} alt="Not Found"/>
                        </div>
                        <div>
                            <img src={require("../../../../../Assets/space-img5.jpg")} alt="Not Found"/>
                        </div>
                        <div>
                            <img src={require("../../../../../Assets/space-img6.jpg")} alt="Not Found"/>
                        </div>
                        <div>
                            <img src={require("../../../../../Assets/space-img7.jpg")} alt="Not Found"/>
                        </div>
                        <div>
                            <img src={require("../../../../../Assets/space-img8.jpg")} alt="Not Found"/>
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default Services;