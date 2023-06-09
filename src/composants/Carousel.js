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
        {pictures.length > 1 && (
          <>
            <i
              className="fa-solid fa-chevron-left btn-previous"
              onClick={previousImage}
            ></i>
            <span className="carousel__counter">
              {currentImage + 1} / {pictures.length}
            </span>
            <i
              className="fa-solid fa-chevron-right btn-next"
              onClick={nextImage}
            ></i>
          </>
        )}
      </div>
    </div>
  );
}

export default Carousel;

/*Dans ce code qui affiche le carousel, on utilise : 

'props' qui contient les propriétés passées en paramètre à la fonction 'Carousel'.
En détail 'pictures' est extraite de l'obejt 'props' en utilisant 
"const pictures = props.pictures"; 

les fonctions 'next image' pour passer à l'image suivante et inversement
pour 'previous image'.

&& pour conditionner l'affichage des fontions 'next image' et 'previous image'*/
