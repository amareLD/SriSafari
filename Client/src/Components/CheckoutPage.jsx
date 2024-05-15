import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const CheckoutPage = ({ formData }) => {
  const [years, setYears] = useState(1); 
  const listingFeePerYear = 100;
  const totalPrice = listingFeePerYear * years;

  const containerStyle = {
    textAlign: "center",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
  };

  const buttonStyle = {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    margin: "0 10px" 
  };

  const totalPriceStyle = {
    fontSize: "18px"
  };

  const buttonsContainerStyle = {
    display: "flex",
    alignItems: "center", 
    justifyContent: "center",
    marginTop: "10px"
  };

  const checkoutButtonStyle = {
    ...buttonStyle, 
    marginLeft: "260px" 
  };

  return (
    <div style={containerStyle}>
      <h1>Checkout</h1>
      <div>
        <h3>Total Listing Fee per Year: ${listingFeePerYear}</h3>
        <h3>Number of years:</h3> 
        <div style={buttonsContainerStyle}>
          <button style={buttonStyle} onClick={() => setYears(years - 1)}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <h3>{years}</h3>
          <button style={buttonStyle} onClick={() => setYears(years + 1)}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
        <h3 style={totalPriceStyle}>Total Price: ${totalPrice}</h3>
        <button
          style={checkoutButtonStyle}
          onClick={() => console.log("Proceed to checkout...")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
