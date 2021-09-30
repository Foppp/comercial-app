import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Row,
  Col,
  Container,
  Card,
  Image,
  Carousel,
} from 'react-bootstrap';
import leftImage from '../../assets/images/left-s.png';
import rightImage from '../../assets/images/right-s.png';
import centerImage from '../../assets/images/center-s.png';
import slide1 from '../../assets/images/slide1.png';
import slide2 from '../../assets/images/slide2.png';
import slide3 from '../../assets/images/slide3.png';
import slide4 from '../../assets/images/slide4.png';

const Home = () => {
  return (
    <Container fluid className='p-0'>
      <Carousel fade>
      <Carousel.Item interval={2000}>
          <img className='d-block w-100' src={slide1} alt='First slide' />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className='d-block w-100' src={slide2} alt='Second slide' />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className='d-block w-100' src={slide3} alt='Third slide' />
        </Carousel.Item>
        <Carousel.Item interval={2000} >
          <img className='d-block w-100' src={slide4} alt='Fourth slide' />
        </Carousel.Item>
      </Carousel>
      <Row className='m-2'>
        <Col className='text-center d-flex flex-column'>
          <h2 className='display-5'>Welcome to Synthmaster!</h2>
          <p className=''>
            Experience our unique combination of music stores and webshop,
            premium brands and competitive prices, professional advice and
            personal service. Making music is something you do with your heart.
            We at Synthmaster share your love of music and your passion for
            making music.
          </p>
        </Col>
      </Row>
      <Row className='m-2'>
        <Col sm className='text-center d-flex flex-column border mx-sm-2 my-2 rounded'>
        <img
            className='img-fluid mt-2 rounded'
            src={rightImage}
            alt='synth-right'
          />
          <h2 className='display-5 mt-2'>Music synthesizer</h2>
          <p className='lead'>
            Also called electronic sound synthesizer, machine that
            electronically generates and modifies sounds, frequently with the
            use of a digital computer. Synthesizers are used for the composition
            of electronic music and in live performance. The intricate apparatus
            of the sound synthesizer generates wave forms and then subjects them
            to alteration in intensity, duration, frequency, and timbre, as
            selected by the composer or musician. Synthesizers are capable of
            producing sounds far beyond the range and versatility of musical
            instruments.
          </p>
        </Col>
        <Col sm className='text-center d-flex flex-column border mx-sm-2 my-2 rounded'>
        <img className='img-fluid mt-2 rounded' src={leftImage} alt='' />

          <h2 className='display-5 mt-2'>Electronic sound</h2>
          <p className='lead'>
            The first electronic sound synthesizer, an instrument of awesome
            dimensions, was developed by the American acoustical engineers Harry
            Olson and Herbert Belar in 1955 at the Radio Corporation of America
            RCA laboratories at Princeton, New Jersey. The information was fed
            to the synthesizer encoded on a punched paper tape. It was designed
            for research into the properties of sound and attracted composers
            seeking to extend the range of available sound or to achieve total
            control of their music.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
