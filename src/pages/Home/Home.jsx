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
import leftImage from '../../assets/images/left-s.png';
import rightImage from '../../assets/images/right-s.png';
import slide1 from '../../assets/images/slice1.jpg';
import slide2 from '../../assets/images/slice2.jpg';
import slide3 from '../../assets/images/slice3.jpg';

const Home = () => {
  const categories = useSelector(state => state.productsInfoReducer.categoryList);
  const mainCategories = categories.filter((c) => c.assets.length !== 0);
  return (
    <Container fluid className='p-0'>
      <Carousel fade>
        <Carousel.Item interval={2000}>
          <Image className='d-block w-100' src={slide1} alt='First slide' />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Image className='d-block w-100' src={slide2} alt='Second slide' />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <Image className='d-block w-100' src={slide3} alt='Third slide' />
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
      <Row className='mx-0'>
        {mainCategories.map((category) => {
          const [{ url }] = category.assets;
          return (
            <Col sm key={category.id}>
              <Card as={Link} to="/products" className='bg-dark text-white text-center mt-1 category-card'>
                <Card.Img src={url} alt='Card image' className="category-card-image" />
                <Card.ImgOverlay>
                  <Card.Title className="category-card-title">{ category.name}</Card.Title>
                </Card.ImgOverlay>
              </Card>
            </Col>
          );
        })}
      </Row>
      <Row className='m-2'>
        <Col
          sm
          className='text-center d-flex flex-column border mx-sm-2 my-2 rounded'
        >
          
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
          {/* <Image
            className='img-fluid mb-auto rounded'
            src={rightImage}
            alt='synth-right'
          /> */}
        </Col>
        <Col
          sm
          className='text-center d-flex flex-column border mx-sm-2 my-2 rounded'
        >
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
          {/* <Image className='img-fluid mb-auto rounded' src={leftImage} alt='' /> */}

        </Col>
      </Row>
    </Container>
  );
};

export default Home;
