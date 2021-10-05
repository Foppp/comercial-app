import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  Button,
  Row,
  Col,
  Container,
  Card,
  Image,
  Carousel,
} from 'react-bootstrap';
import RecomendedProducts from '../Products/components/RecomendedProducts';
import mainHeader from '../../assets/images/main_header.jpg';
import synthStore from '../../assets/images/synthStore.jpg';
import slide1 from '../../assets/images/slice1.jpg';
import slide2 from '../../assets/images/slice2.jpg';
import slide3 from '../../assets/images/slice3.jpg';

const Home = () => {
  const products = useSelector((state) => state.productsInfoReducer.products);
  return (
    <Container fluid className='p-0'>
      <Image fluid src={mainHeader} alt='mainHeader' />
      <Row className='p-3'>
        <Col className='text-center d-flex flex-column'>
          <h2 className='display-5'>Welcome to Synthmaster!</h2>
          <small>
            Experience our unique combination of music stores and webshop,
            premium brands and competitive prices, professional advice and
            personal service. Making music is something you do with your heart.
            We at Synthmaster share your love of music and your passion for
            making music.
          </small>
        </Col>
      </Row>
      <Row className='p-3'>
        <Col className='text-center d-flex flex-column px-3'>
          <h2 className='display-5'>Our synth store</h2>
          <Image src={synthStore} alt='mainHeader' />
        </Col>
        <Col className='text-center d-flex flex-column mt-5 px-3'>
          <p>
            Synthmaster is your go-to online music store with more than 48,000
            bits of gear and accessories in stock. More than 1,000 brands and a
            26,000m2 warehouse packed with musical instruments, DJ and studio
            gear, headphones, speakers and lighting. Ordered before 10 PM?
            Receive delivery in 2 - 4 business days.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className='text-center d-flex flex-column'>
          <h4>Recommended Products</h4>
          <RecomendedProducts />
        </Col>
      </Row>
      <Row className='m-1'>
        <Col
          sm
          className='text-center p-1 d-flex flex-column border mx-sm-2 my-2 rounded shadow-sm'
        >
          <h3 className='mt-2'>Music synthesizer</h3>
          <small>
            Also called electronic sound synthesizer, machine that
            electronically generates and modifies sounds, frequently with the
            use of a digital computer. Synthesizers are used for the composition
            of electronic music and in live performance. The intricate apparatus
            of the sound synthesizer generates wave forms and then subjects them
            to alteration in intensity, duration, frequency, and timbre, as
            selected by the composer or musician. Synthesizers are capable of
            producing sounds far beyond the range and versatility of musical
            instruments.
          </small>
        </Col>
        <Col
          sm
          className='text-center p-1 d-flex flex-column border mx-sm-2 my-2 rounded shadow-sm'
        >
          <h3 className='mt-2'>Electronic sound</h3>
          <small>
            The first electronic sound synthesizer, an instrument of awesome
            dimensions, was developed by the American acoustical engineers Harry
            Olson and Herbert Belar in 1955 at the Radio Corporation of America
            RCA laboratories at Princeton, New Jersey. The information was fed
            to the synthesizer encoded on a punched paper tape. It was designed
            for research into the properties of sound and attracted composers
            seeking to extend the range of available sound or to achieve total
            control of their music.
          </small>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
