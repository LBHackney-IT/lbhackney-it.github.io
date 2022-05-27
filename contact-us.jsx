import React from "react";
import CONTACT_DATA from "./contact-data.js";

const ContactContainer = () => {
  return (
    <div className="contact-container">
      <div className="enquiries-half">
        <div className="description-container">
          <h2>For any enquiries please speak to:</h2>
          <ul className="enquiries-list">
            {
              CONTACT_DATA.map(dataItem => (
                <li style={{wordWrap: "break-word"}}>
                  {dataItem}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactContainer;
