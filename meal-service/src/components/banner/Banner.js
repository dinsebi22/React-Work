import React from "react";
import Card from "../../UI/Card/Card";
import "./Banner.css";

const Banner = (props) => {
  return (
    <div className="outer-banner-cont">
      <div className="banner-cont">
        <div className="text-center banner-info-cont">
          <Card bg={"dark"}>
            <h2>Banner title </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              placeat aut iste laboriosam doloremque. Dolorum eum voluptate odio
              error voluptates nisi suscipit. Rem et sit, adipisci quam natus
              repellat maiores.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Banner;
