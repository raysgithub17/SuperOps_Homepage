import React from "react";
import "./CardBox.css";

function CardBox() {
  return (
    <div className="full-card-box">
      <div className="box-1">
        <h className="box-1-head-1">Ready to get started?</h>
        <p className="box-1-para-1">
          Improve efficiency, offer better customer support, onboard more
          clients, and improve profitability with SuperOps.
        </p>
        <button className="box-1-button-1">BOOK A DEMO</button>
        <button className="box-1-button-2">GET STARTED FOR FREE</button>
      </div>
      <div className="tilting-card-wrapper">
        <div className="mouse-position-tracker"></div>
        <div className="mouse-position-tracker"></div>
        <div className="mouse-position-tracker"></div>
        <div className="mouse-position-tracker"></div>
        <div className="mouse-position-tracker"></div>
        <div className="mouse-position-tracker"></div>
        <div className="mouse-position-tracker"></div>
        <div className="mouse-position-tracker"></div>
        <div className="mouse-position-tracker"></div>
        <div className="tilting-card-body">
          <h className="box-2-head-1">Transparent pricing</h>
          <p className="box-2-para-1">
            Pricing that's simple, clear-cut, and scalable. No hidden charges
          </p>
          <p className="box-2-para-2">view pricing</p>
        </div>
      </div>
      <div className="tilting-card-wrapper">
        <div className="mouse-position-tracker"></div>
        <div className="mouse-position-tracker"></div>
        <div className="mouse-position-tracker"></div>
        <div className="mouse-position-tracker"></div>
        <div className="mouse-position-tracker"></div>
        <div className="mouse-position-tracker"></div>
        <div className="mouse-position-tracker"></div>
        <div className="mouse-position-tracker"></div>
        <div className="mouse-position-tracker"></div>
        <div className="tilting-card-body">
          <h className="box-3-head-1">Integration with APIs</h>
          <p className="box-3-para-1">
            Integrate your tech ecosystem with SuperOps easily
          </p>
          <p className="box-3-para-2">view APIs</p>
        </div>
      </div>
    </div>
  );
}
export default CardBox;