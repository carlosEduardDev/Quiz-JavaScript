import React from "react";

const Radio = ({ responses, id, value, setValue }) => {
  return (
    <>
      {responses.map((response) => (
        <label key={response} htmlFor={id}>
          <input
          value={response}
            checked={value === response}
            type="radio"
            id={id}
            onChange={() => setValue(response)}
          />
          {response}
        </label>
      ))}
    </>
  );
};

export default Radio;
