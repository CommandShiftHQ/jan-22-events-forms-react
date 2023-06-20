import { useState } from "react";
import "../styles/app.css";
import initialData from "../data/sampleData.json";
import RecordForm from "./RecordForm";
import Record from "./Record";

const App = () => {
  const [records, setRecords] = useState(initialData);

  const handleAddRecord = (record) => {
    setRecords([...records, record]);
  };

  return (
    <div className="app">
      <div className="app__background-wrap" />
      <div className="app__foreground-wrap">
        <div className="app__title">Events and forms in React</div>
        <div className="app__form-wrapper">
          <RecordForm handleAddRecord={handleAddRecord} />
        </div>
        <div className="app__records-wrapper">
          {records.map((record, i) => {
            return <Record key={i} record={record} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
