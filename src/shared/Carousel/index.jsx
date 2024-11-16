import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MultiCarousel = (props) => {
  return <Carousel {...props}>{props.children}</Carousel>;
};

export default MultiCarousel;
