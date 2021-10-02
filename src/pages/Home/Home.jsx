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
import main from '../../assets/images/main_header.jpg';


const Home = () => {
  const categories = useSelector(
    (state) => state.productsInfoReducer.categoryList
  );
  const mainCategories = categories.filter((c) => c.assets.length !== 0);
  return (
    <Container fluid className='p-0'>
              <Image src={main} fluid />
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
      <Row className='mx-0'>
        {mainCategories.map((category) => {
          const [{ url }] = category.assets;
          return (
            <Col lg={3} sm={6} key={category.id}>
              <Card
                as={Link}
                to='/products'
                className='bg-dark text-white text-center mt-1 category-card'
              >
                <Card.Img
                  src={url}
                  alt='Card image'
                  className='category-card-image'
                />
                <Card.ImgOverlay>
                  <Card.Title className='category-card-title'>
                    {category.name}
                  </Card.Title>
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
          className='text-center d-flex flex-column border mx-sm-2 my-2 rounded'
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
