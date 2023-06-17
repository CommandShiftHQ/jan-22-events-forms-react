import React from "react";
import "../styles/record.css";

const Record = ({ record }) => {
  return (
    <div className="record__wrapper">
      <div className="record__title">
        {record.bandName} - {record.albumName}
      </div>
      <div className="record__description">{record.description}</div>
      <div className="record__genre">Genre: {record.genre}</div>
      <div className="record__on-tour">
        {record.onTour ? "Currently touring" : "Not currently touring"}
      </div>
    </div>
  );
};

export default Record;
