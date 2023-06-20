import React, { useState } from "react";
import "../styles/record-form.css";

const RecordForm = ({ handleAddRecord }) => {
  const [formData, setFormData] = useState({
    bandName: "",
    albumName: "",
    genre: "",
    description: "",
    onTour: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddRecord(formData);
  };

  const handleChange = (event) => {
    const { name, type, checked, value } = event.target;
    const fieldValue = type === "checkbox" ? checked : value;
    setFormData({ ...formData, [name]: fieldValue });
  };

  return (
    <form className="record-form" onSubmit={handleSubmit}>
      <div className="record-form__title">Add New Record Form</div>
      <label>
        Enter bandname:
        <input
          type="text"
          name="bandName"
          value={formData.bandName}
          onChange={handleChange}
          placeholder="Enter a bandname"
        />
      </label>

      <label>
        Enter album name:
        <input
          type="text"
          name="albumName"
          value={formData.albumName}
          onChange={handleChange}
          placeholder="Enter an album"
        />
      </label>

      <label>
        Enter genre:
        <select name="genre" value={formData.genre} onChange={handleChange}>
          <option value="Stoner rock">Stoner rock</option>
          <option value="Indie rock">Indie rock</option>
          <option value="Alternative rock">Alternative rock</option>
        </select>
      </label>

      <label>
        Enter description:
        <input
          type="text"
          name="description"
          onChange={handleChange}
          value={formData.description}
          placeholder="Enter a description"
        />
      </label>

      <label>
        Currently on tour?
        <input
          type="checkbox"
          name="onTour"
          onChange={handleChange}
          value={formData.onTour}
        />
      </label>

      <button type="submit">Submit record</button>
    </form>
  );
};

export default RecordForm;
