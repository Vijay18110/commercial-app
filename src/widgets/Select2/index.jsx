import React from "react";
import Select from "react-select";

const Select2 = ({ options, name, isSearchable, defaultValue, colourStyles }) => {
  return (
    <Select
      styles={colourStyles}
      classNamePrefix="select"
      defaultValue={defaultValue}
      isSearchable={isSearchable}
      name={name}
      options={options}
    />
  );
};

export default Select2;
