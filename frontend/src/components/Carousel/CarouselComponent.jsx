import { Carousel } from "react-bootstrap";
import './carousel.scss'

const CarouselComponent = ({ images }) => {

  return (
    <div className="carousel-div">
      <Carousel fade>
        {images?.map((image,i )=> (
          <Carousel.Item key={i}>
            <img
              className="d-block w-100"
              src={image}
              alt="First slide"
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
