import React from "react";

const ApprovealCard = (props) => {
  return (
    <div className="ui cards">
      <div className="card">
        <div className="content">{props.children}</div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button">Aprrove</div>
            <div className="ui basic red button">Reject</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovealCard;
