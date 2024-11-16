import React from "react";
import Select2 from "../Select2";

const Location = ({ isSearchable, defaultValue, options, colourStyles }) => {
  return (
    <div className="location">
      <Select2
        isSearchable={isSearchable}
        defaultValue={defaultValue}
        options={options}
        name="location"
        colourStyles={colourStyles}
      />
    </div>
  );
};

export default Location;
