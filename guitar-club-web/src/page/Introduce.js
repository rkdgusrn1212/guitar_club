import React from 'react';
import PropTypes from 'prop-types';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import Header from '../component/Header';

const Introduce = ()=>(
  <div>
    <Header/>
    <Grid>
      <Row>
        <Col xs={12}>
          <Image src="http://placehold.it/1200x800" responsive/>
        </Col>
      </Row>
    </Grid>
  </div>
);

export default Introduce;
