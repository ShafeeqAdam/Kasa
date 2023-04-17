import React, { useState } from "react";
import "../composants/Carousel.scss";

function Carousel(props) {
  const pictures = props.pictures;
  const [currentImage, setCurrentImage] = useState(0);

  const previousImage = () => {
    setCurrentImage(
      currentImage - 1 < 0 ? pictures.length - 1 : currentImage - 1
    );
  };

  const nextImage = () => {
    setCurrentImage(currentImage + 1 >= pictures.length ? 0 : currentImage + 1);
  };

  return (
    <div className="carousel">
      <div className="carousel__image">
        <img src={pictures[currentImage]} alt="appart" />
        <i
          className="fa-solid fa-chevron-left btn-previous"
          onClick={previousImage}
        ></i>
        <i
          className="fa-solid fa-chevron-right btn-next"
          onClick={nextImage}
        ></i>
      </div>
    </div>
  );
}

export default Carousel;
