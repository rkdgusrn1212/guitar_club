import React, {PropTypes} from 'react';
import {Grid, Panel, Row, Carousel} from 'react-bootstrap';
import Header from '../component/Header';

class Home extends React.Component{
  constructor(props, context) {
      super(props, context);

      this.handleSelect = this.handleSelect.bind(this);

      this.state = {
        index: 0,
        direction: null
      };
    }

  handleSelect(selectedIndex, e) {
    alert(`selected=${selectedIndex}, direction=${e.direction}`);
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render(){
    return(
      <div>
        <Header/>
        <Grid>
          <Row>
            <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
              <Carousel.Item>
                <img width="100%" alt="Main Banner 1" src="http://placehold.it/1200x300" />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img width="100%" alt="Main Banner 2" src="http://placehold.it/1200x300" />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img width="100%" alt="Main Banner 3" src="http://placehold.it/1200x300" />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Home;
