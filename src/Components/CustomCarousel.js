import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Eg from '../Images/exampleImage.jpg'

import './Stylings/CustomCarousel.css'; // Import the CSS file

export default function CustomCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="carousel-container"> {/* Centering container */}
            <div className="carousel-wrapper"> {/* Wrapper without fixed aspect ratio */}
                <Carousel activeIndex={index} onSelect={handleSelect} className="custom-carousel">
                    <Carousel.Item>
                        <img src={Eg} alt="First slide" className="carousel-image" /> {/* Image styling */}
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Eg} alt="Second slide" className="carousel-image" />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={Eg} alt="Third slide" className="carousel-image" />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}
