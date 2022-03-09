import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

class SecondCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      carouselList: [],
      incomingProps: props,
    };
  }
  componentDidMount = () => {
    fetch('/altudoapi/GetFullBleedImageFromArticles')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            carouselList: result,
            incomingProps: this.props,
          });
        },
        (error) => {
          this.setState({
            error,
            isLoaded: true,
          });
        }
      );
  };

  render() {
    return (
      <div style={{ display: 'block', width: 700, padding: 30 }}>
        <h4>React-Bootstrap Carousel Component</h4>
        <Carousel>
          {this.state.carouselList.map((carouselItem) => (
            <Carousel.Item interval={1500} key={carouselItem.Name}>
              <img
                className="d-block w-100"
                src={carouselItem.CarouselImageUrl}
                alt={carouselItem.CarouselTitle}
              />
              <Carousel.Caption>
                <a href={carouselItem.CarouselUrl}>
                  <h3>{carouselItem.CarouselTitle}</h3>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
}

export default SecondCarousel;
