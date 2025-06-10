import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./components/SkipCard.css";
import SkipCard from "./components/SkipCard";
import skips from "./skipData.json";
import "./App.css";

function App() {
  const [selectedSkip, setSelectedSkip] = useState(null);

  const handleSelect = (skip) => {
    if (selectedSkip && skip && selectedSkip.size === skip.size) {
      setSelectedSkip(null);
    } else {
      setSelectedSkip(skip);
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="App">
      <div className="header-text">
        <h1>Choose Your Skip Size</h1>
        <p>Select the skip size that best suits your needs</p>
      </div>

      <Slider {...sliderSettings}>
        {skips.map((skip) => (
          <div key={skip.id}>
            <SkipCard
              skip={skip}
              isSelected={selectedSkip?.id === skip.id}
              onSelect={handleSelect}
            />
          </div>
        ))}
      </Slider>

      {selectedSkip && (
        <div className="footer-bar">
          <span>
            {selectedSkip.size} Yard Skip - £
            {(
              selectedSkip.price_before_vat *
              (1 + selectedSkip.vat / 100)
            ).toFixed(0)}{" "}
            {selectedSkip.hire_period_days} day hire
          </span>
          <button>Continue ➜</button>
        </div>
      )}
    </div>
  );
}

export default App;
