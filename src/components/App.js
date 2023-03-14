import React, { useState } from "react";
import PersonalInformation from "./PersonalInformation";
import CarInformation from "./CarInformation";
import PaymentInformation from "./PaymentInformation";
import './../styles/App.css';

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    make: "",
    model: "",
    creditCardNumber: "",
    expirationDate: ""
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log(formData); // do something with the form data
  };

  return (
    <div>
      {step === 1 && (
        <PersonalInformation
          formData={formData}
          setFormData={setFormData}
          onNext={handleNext}
        />
      )}
      {step === 2 && (
        <CarInformation
          formData={formData}
          setFormData={setFormData}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
      {step === 3 && (
        <PaymentInformation
          formData={formData}
          setFormData={setFormData}
          onPrev={handlePrev}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default App;
