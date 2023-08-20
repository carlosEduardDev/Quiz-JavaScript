import React from "react";

const Radio = ({ responses, id, value, setValue, checked }) => {
  return (
    <>
      {responses.map((response) => (
        <label key={response} htmlFor={id}>
          <input
            checked={value === response}
            type="radio"
            id={id}
            onClick={() => setValue(response)}
          />
          {response}
        </label>
      ))}
    </>
  );
};

export default Radio;
