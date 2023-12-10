import React from "react";

const Mensage = ({ option, optionsArray, optionSelected }) => {
  return (
    <div>
      <select
        value={option}
        onChange={(event) => optionSelected(event.target.value)}
      >
        {optionsArray.map((op) => {
          return (
            <option key={op.value} value={op.value}>
              {op.text}
            </option>
          );
        })}
      </select>
      <div>
        {optionsArray.map((op)=> {
            return (
                <div key={op.value}>
                    <input 
                    type="radio" 
                    name="options"
                    value="op.value"
                    checked={option==op.value}
                    onChange={
                        () => optionSelected(op.value)
                    }
                    />
                    <label htmlFor={op.value}>{op.value}</label>
                </div>
            )
        })}
      </div>
    </div>
  );
};

export default Mensage;
