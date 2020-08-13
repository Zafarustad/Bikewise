import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';

const BikeCard = ({ bike }) => {
  return (
    <div className='d-flex justify-content-center' key={bike.id}>
      <Jumbotron className='mx-5 mt-3 w-75 shadow'>
        <Container>
          <Row className='d-flex flex-wrap'>
            {bike.media.image_url_thumb && (
              <>
                <Col xs='3'>
                  <img
                    src={bike.media.image_url_thumb}
                    className='rounded shadow-sm'
                    alt='bike_image'
                    width='150'
                  />
                </Col>
              </>
            )}
            <>
              <Col className='d-flex flex-column'>
                <h4 className='text-primary'>{bike.title}</h4>
                <span className='mt-2'>{bike.description}</span>
                <span className='mt-2'>
                  Date of theft: {new Date(bike.occurred_at).toDateString()}
                </span>
                <span className='mt-2'>
                  Date reported: {new Date(bike.updated_at).toDateString()}
                </span>
                <span className='mt-2'>{bike.address}</span>
              </Col>
            </>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default BikeCard;
