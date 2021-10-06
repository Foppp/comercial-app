import React, { useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Col, Row, Button, Card } from 'react-bootstrap';
import { addToCart } from '../../../redux/cartReducer/asyncThunk';
import LoadSpinner from '../../../components/Spinner/Spinner';
import AddToCartButton from './AddToCartButton';

const ProductDetails = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.productsInfoReducer.products);
  const [product] = products.filter((item) => item.permalink === id);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (products.length === 0) {
    return (
      <Container className='product-container text-center py-5'>
        <LoadSpinner />
      </Container>
    );
  }

  return product ? (
    <Container className='product-container py-5'>
      <Card>
        <Row md={1}>
          <Col lg={7}>
            <Card.Img className='p-3' src={product.media.source} />
          </Col>
          <Col
            lg={5}
            className='d-flex flex-column justify-content-around align-items-center p-3'
          >
            <Row>
              <small>{product.sku}</small>
            </Row>
            <Row>
              <h3>{product.name}</h3>
            </Row>
            <Row className='mt-3'>
              <h4>{product.price.formatted_with_symbol}</h4>
            </Row>
            <Row>
              <Col className='d-flex justify-content-around align-items-center'>
                <Button
                  variant='light'
                  className='rounded-pill mt-2 mx-2 text-wrap'
                  onClick={() => history.goBack()}
                >
                  Back
                </Button>
                <AddToCartButton product={product} />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card.Footer className='p-3'>
              {
                <small
                  className='lead'
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              }
            </Card.Footer>
          </Col>
        </Row>
      </Card>
    </Container>
  ) : (
    <Container className='product-container mt-5'>
      <Col className='text-center'>
        <Row>
          <h1>There is no such product</h1>
        </Row>
        <Row className='d-inline-flex'>
          <Button as={Link} to='/products' className='btn btn-secondary'>
            Back to Shopping
          </Button>
        </Row>
      </Col>
    </Container>
  );
};

export default ProductDetails;
