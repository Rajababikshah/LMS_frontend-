import React from "react";
import "./BecomeInstructor.css";

const MainSectionLayout = ({ title, desc, button, image, children }) => (
  <div className="become-instructor-main-section">
    <div className="become-instructor-main-content">
      <div className="become-instructor-main-title">{title}</div>
      <div className="become-instructor-main-desc">{desc}</div>
      {button && <button className="become-instructor-main-btn">{button}</button>}
      {children}
    </div>
    <div className="become-instructor-main-img">
      <img src={image} alt={title} />
    </div>
  </div>
);

export default MainSectionLayout;
