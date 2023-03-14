import React, { useState } from "react";

const PaymentInformation = ({ formData, setFormData, onPrev, onSubmit }) => {
  const [creditCardNumberError, setCreditCardNumberError] = useState(null);
  const [expirationDateError, setExpirationDateError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.name === "creditCardNumber") {
      if (e.target.value.length === 12) {
        setCreditCardNumberError(null);
      } else {
        setCreditCardNumberError(
          "Credit card number must be exactly 12 digits long."
        );
      }
    }

    if (e.target.name === "expirationDate") {
      const expirationDatePattern = /^\d{2}\/\d{2}$/;
      if (e.target.value.match(expirationDatePattern)) {
        setExpirationDateError(null);
      } else {
        setExpirationDateError("Expiration date must be in the format MM/YY.");
      }
    }
  };

  const handleSubmit = () => {
    if (!creditCardNumberError && !expirationDateError) {
      onSubmit();
    }
  };

  return (
    <div>
      <h3>Payment Details</h3>
      <label>
        Credit Card Number:
        <input
          type="text"
          name="creditCardNumber"
          value={formData.creditCardNumber}
          onChange={handleChange}
        />
        {creditCardNumberError && (
          <div class="error" style={{ color: "red" }}>
            {creditCardNumberError}
          </div>
        )}
      </label>
      <label>
        Expiration Date:
        <input
          type="text"
          name="expirationDate"
          value={formData.expirationDate}
          onChange={handleChange}
        />
        {expirationDateError && (
          <div class="error" style={{ color: "red" }}>
            {expirationDateError}
          </div>
        )}
      </label>
      <button onClick={onPrev}>Previous</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default PaymentInformation;
