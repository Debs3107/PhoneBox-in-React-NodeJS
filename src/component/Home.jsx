import React from "react";

import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import photo1 from '../assets/1.jpeg';
import photo2 from '../assets/mobile.jpg';
import photo3 from '../assets/train.jpg';

export const Home = () => {
    return (
        <>

            <div className="carousel-container">
                <Carousel>
                    <Carousel.Item interval={1500} >
                        <img
                            className="photo "
                            src={photo1}
                            alt="First slide"
                            style={{ width: '100em' }}

                        />
                        <Carousel.Caption>
                            <h3>PhoneBox</h3>
                            <p>.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                            className=" photo"
                            src={photo2}
                            alt="Second"
                            style={{ width: '100%' }}
                        />
                        <Carousel.Caption>
                            <h3>PhoneBox</h3>
                            <p></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className=" photo "
                            src={photo3}
                            alt="Third slide"
                            style={{ width: '100%' }}
                        />
                        <Carousel.Caption>
                            <h3>PhoneBox</h3>
                            <p>

                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>


        </>

    )


}