import "./house.css";
import { useState } from "react";
import emailIcon from "./Email.png";
import Inquiry from "./Inquiry";
import "animate.css";

const House = ({ house }) => {
  const [inquiryShown, setInquiryShown] = useState(false);
  const inquiryClick = () => {
    setInquiryShown(!inquiryShown);
  };
  return (
    <div>
      <div className="row mt-2">
        <h5 className="col-md-12 text-uppercase fs-1">{house.country}</h5>
      </div>
      <div className="row">
        <h3 className="col-md-12">{house.address}</h3>
      </div>
      <div className="row">
        <div className="col-md-7">
          <img src={`/images/${house.photo}.jpeg`} alt="House" />
        </div>
        <div className="col-md-5">
          <p className="price">${house.price}</p>
          <p>{house.description}</p>
          <div
            className="animate__animated animate__fadeInUp animate__repeat-3"
            onClick={inquiryClick}
          >
            <img src={emailIcon} height="50" alt="inquiry" />
            <div class="inquirybtn col-md-3">Inquire here</div>
          </div>
          {inquiryShown && <Inquiry house={house} />}
        </div>
      </div>
    </div>
  );
};

export default House;
