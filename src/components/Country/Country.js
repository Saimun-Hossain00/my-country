import React from "react";

const Country = (props) => {
  const { name, population, region, flag } = props.country;
  const countryStyle = {
    border: "5px solid red",
    margin: "10px",
    padding: "15px",
    borderRadius: "13px",
    boxShadow: "4px 4px 6px gray",
    fontSize: "26px",
    color: "blue",
    backgroundColor: "gray",
  };
  const handelAddCountry = props.handelAddCountry;
  return (
    <div style={countryStyle}>
      <h4>This is a {name}</h4>
      <img style={{ height: "100px" }} src={flag} alt="" />
      <p>population:{population}</p>
      <p>
        <small>region:{region}</small>
      </p>
      <button
        onClick={() => handelAddCountry(props.country)}
        style={{
          height: "30px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "goldenrod",
          fontWeight: "bold",
        }}
      >
        Add Country
      </button>
    </div>
  );
};

export default Country;
