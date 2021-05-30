const weatherIcons = {
  cloudy: () => {
    return (
      <img
        className="img-fluid"
        alt="cloudy"
        src="https://img.icons8.com/wired/256/000000/clouds.png"
      />
    );
  },

  rainy: () => {
    return (
      <img
        className="img-fluid"
        alt="rainy"
        src="https://img.icons8.com/wired/256/000000/rain.png"
      />
    );
  },
  sunny: () => {
    return (
      <img
        className="img-fluid"
        alt="sunny"
        src="https://img.icons8.com/wired/256/000000/summer.png"
      />
    );
  },

  windy: () => {
    return (
      <img
        className="img-fluid"
        alt="windy"
        src="https://img.icons8.com/wired/256/000000/wind.png"
      />
    );
  },

  clear: () => {
    return (
      <img
        className="img-fluid"
        alt="clear"
        src="https://img.icons8.com/wired/256/000000/sun.png"
      />
    );
  },
};

export default weatherIcons;
