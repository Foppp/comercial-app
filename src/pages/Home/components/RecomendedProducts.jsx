import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { Row, Col, Container, Carousel, CardGroup, Card } from 'react-bootstrap';
import ProductItem from '../../Products/components/ProductItem';
import { setTotalPages } from '../../../redux/productsReducer/products';
import LoadSpinner from '../../../components/Spinner/Spinner';

const RecomendedProducts = () => {
  const products = useSelector((state) => state.productsInfoReducer.products);
  const qty = 4;
  const pages = 3;
  const chunked = _.chunk(products, qty).slice(0, pages);

  const dispatch = useDispatch();

  return (
    <Col sm>
      {products.length === 0 ? (
        <Container className='text-center'>
          <LoadSpinner />
        </Container>
      ) : (
        <Carousel variant='dark' controls={false}>
          {chunked.map((p) => (
            <Carousel.Item
              key={_.uniqueId()}
              interval={2000}
              className='mb-5 px-4'
            >
              <Row lg={4} md={2} sm={2} xs={1}>
                {p.map((product) => (
                  <Card
                    as={Link}
                    to={`products/${product.permalink}`}
                    key={product.id}
                    className='text-white py-2 recomended-card'
                  >
                    <Card.Img
                      src={product.media.source}
                      alt='Card image'
                      className='recomended-card-image'
                    />
                    <Card.ImgOverlay className='d-flex flex-column'>
                      <Card.Title className='float-start'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='36'
                          height='36'
                          fill='currentColor'
                          className='bi bi-award'
                          viewBox='0 0 16 16'
                        >
                          <path d='M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z' />
                          <path d='M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z' />
                        </svg>
                      </Card.Title>
                      <Card.Text>{product.name}</Card.Text>
                      <Card.Text>
                        {product.price.formatted_with_symbol}
                      </Card.Text>
                    </Card.ImgOverlay>
                  </Card>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </Col>
  );
};

export default RecomendedProducts;
