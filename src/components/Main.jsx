/* eslint-disable react/prop-types */
import { useState } from "react";

const Display = ({ images }) => {
  const [shuffledImages, setShuffledImages] = useState([...images]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedImage, setClickedImage] = useState([]);

  const shuffleImages = () => {
    const shuffled = [...shuffledImages];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledImages(shuffled);
  };
  const handleImageClick = (pokemon) => {
    if (clickedImage.includes(pokemon)) {
      setScore(0);
      setClickedImage([]);
    if (score > bestScore){
      setBestScore(score);
    }
    }else {
      setScore(score + 1);
      setClickedImage([...clickedImage, pokemon])
    }
    shuffleImages();
  };
  

  return (
    <div>
      <div className="header">
      <h1>Do Not Click On The Same Pokemon Twice!</h1>
      </div>
      <div className="scores">
      <h2>Score: {score}</h2>
      <h2>Best Score: {bestScore}</h2>
      </div>
      <div className="main">
        {shuffledImages.map((image) => (
          <img
            key={image.id}
            src={image.image}
            alt={`Pokemon ${image.id}`}
            onClick={() => handleImageClick(image.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Display;
