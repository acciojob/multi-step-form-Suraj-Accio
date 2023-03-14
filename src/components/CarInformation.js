import React from "react";

const CarInformation = ({ formData, setFormData, onPrev, onNext }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h3>Car Details</h3>
      <label>
        Brand:
        <input
          type="text"
          name="make"
          value={formData.make}
          onChange={handleChange}
        />
      </label>
      <label>
        Model:
        <input
          type="text"
          name="model"
          value={formData.model}
          onChange={handleChange}
        />
      </label>
      <button onClick={onPrev}>Previous</button>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default CarInformation;
