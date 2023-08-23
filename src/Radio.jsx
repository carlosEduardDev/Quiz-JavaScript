import React from "react";

const Radio = ({ responses, id, value, setValue, setElement }) => {
  const [optionsSort, setOptionsSort] = React.useState([]);

  React.useEffect(() => {
    const sort = responses.sort(() => Math.random() - 0.5);
    setOptionsSort([...sort]);
  }, [responses]);

  return (
    <div className="container-options">
      {optionsSort.map((response) => (
        <label className="options" key={response} htmlFor={id}>
          <input
            value={response}
            checked={value === response}
            type="radio"
            id={id}
            onChange={() => {
              if (response) setValue(response);
            }}
            onClick={(e) => setElement(e.target.parentElement)}
          />
          {response}
        </label>
      ))}
    </div>
  );
};

export default Radio;
