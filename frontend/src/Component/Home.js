//import Carousel from 'Carousel'
import React from 'react'
import { Carousel, Col, Row } from 'react-bootstrap'
import './home.css';

export default function Home() {
    return (
        <div>
            <div id="homeCarousel">
                <container>
                    <Row>
                        <Col>
                            <Carousel>
                                <Carousel.Item>
                                    <img src='Images/hm1.jpg' alt="home1" height={550} width={600} class="d-block w-100" />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h5>Agricultre Rental Buisness</h5>
                                        <p>Farmers can take and give product on rent</p>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src='Images/hm2.jpg' alt="home2" height={550} width={600} class="d-block w-100" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src='Images/hm3.jpg' alt="home3" height={550} width={600} class="d-block w-100" />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </container>
            </div>

            <div id="info">
                    <section class="features">
                        <h3 class="secTitle">Trust, Experience,</h3>
                        <h3 class="secTitle">Convenience</h3>
                        <p>
                            We Provide better platform for farmers to take heavy equipments on rents
                             also owner can give there products on rent
                        </p>
                        <img src="Images/hm4.jpg" alt="home4" height={400} width={30}></img>
                    </section>
            </div>


        </div>
    )
}