import React from "react";
import PropTypes from "prop-types";

const Slider = ({ title1, title2, img, h6, p, customClass }) => {
  return (
    <div className={`main-slider`} style={{ background: `#${customClass}` }}>
      <div class="container">
        <div class="div">
          <div>
            <h2>{title1}</h2>
            <h4>{title2}</h4>
          </div>
          <div className="custom-image">
            <img src={img} alt="mobile-1" />
          </div>
          <div>
            <h6>{h6}</h6>
            <p>{p}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Slider.propTypes = {
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  h6: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
  customClass: PropTypes.string,
};

Slider.defaultProps = {
  customClass: "",
};

export default Slider;
