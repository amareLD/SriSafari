import React, { useState } from "react";
import { hotelFacilities, districts } from "../Components/Hotel-Option";
import "../Styles/HotelForm.css";

const HotelForm = () => {
  const [formData, setFormData] = useState({
    NameOftheProperty: "",
    Email: "",
    District: "",
    GoogleLocation: "",
    ContactNo: "",
    pricePerNight: "",
    type: "",
    facilities: [],
    images: [],
    description: "", 
    imagePreviews: [], 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validation for Contact No field
    if (name === "ContactNo") {
      // Check if the entered value is a number and its length is less than or equal to 10
      if (!/^\d+$/.test(value) || value.length > 10) {
        // If not a number or length exceeds 10 characters, don't update the state
        return;
      }
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFacilitiesChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        facilities: [...formData.facilities, value],
      });
    } else {
      setFormData({
        ...formData,
        facilities: formData.facilities.filter((facility) => facility !== value),
      });
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imagePreviews = [];

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        imagePreviews.push(event.target.result);
        // Update formData with image previews
        setFormData((prevFormData) => ({
          ...prevFormData,
          images: [...prevFormData.images, file],
          imagePreviews: [...prevFormData.imagePreviews, event.target.result],
        }));
      };
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is null or empty
    for (const key in formData) {
      if (!formData[key]) {
        alert(`Please fill in ${key.replace(/([A-Z])/g, ' $1').trim()}`);
        return; // Prevent form submission if any field is empty
      }
    }

    // Handle form submission here if all fields are filled
    console.log(formData);

    // Reset form fields after submission
    setFormData({
      NameOftheProperty: "",
      Email: "",
      District: "",
      GoogleLocation: "",
      ContactNo: "",
      pricePerNight: "",
      type: "",
      facilities: [],
      images: [],
      description: "",
      imagePreviews: [], // Reset image previews
    });
  };

  return (
    <div className="pt-20 container bg-white">
      <h1>Add Your Place</h1>
      <form onSubmit={handleSubmit} className="hotel-form ">
        
        <div className="form-group">
          <label>
            Name Of the Property:
            <input type="text" name="NameOftheProperty" value={formData.NameOftheProperty} onChange={handleChange} />
          </label>
        </div>

        <div className="form-group">
          <label>
            Email:
            <input type="text" name="Email" value={formData.Email} onChange={handleChange} />
          </label>
        </div>

        <div className="form-group">
          <label>
            District:
            <select name="District" value={formData.District} onChange={handleChange}>
              <option value="">Select a district</option>
              {districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="form-group">
          <label>
            Google Location:
            <input type="text" name="GoogleLocation" value={formData.GoogleLocation} onChange={handleChange} />
          </label>
        </div>
      
        <div className="form-group">
          <label>
            Contact No:
            <input type="text" name="ContactNo" value={formData.ContactNo} onChange={handleChange} />
          </label>
        </div>

        <div className="form-group">
          <label>
            Description:
            <textarea 
              name="description" 
              value={formData.description} 
              onChange={handleChange} 
              className="description-textarea" 
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Price Per Night:
            <input type="number" name="pricePerNight" value={formData.pricePerNight} onChange={handleChange} />
          </label>
        </div>
        <div className="form-group">
          <label>
            Type:
            <select name="type" value={formData.type} onChange={handleChange}>
              <option value="">Select a type</option>
              <option value="Budget">Budget</option>
              <option value="Boutique">Boutique</option>
              {/* Add other options from hotelTypes array */}
            </select>
          </label>
        </div>
        <div className="form-group">
          <label>Facilities:</label>
          <div className="facilities-container">
            {hotelFacilities.map((facility, index) => (
              <label key={facility} className="facility-label">
                <input
                  type="checkbox"
                  name="facilities"
                  value={facility}
                  checked={formData.facilities.includes(facility)}
                  onChange={handleFacilitiesChange}
                />
                {facility}
              </label>
            ))}
          </div>
        </div>
        <div className="form-group">
          <label>
            Images:
            <input type="file" name="images" accept="image/*" multiple onChange={handleImageChange} />
          </label>
          <div className="image-preview-container">
            {formData.imagePreviews.map((preview, index) => (
              <img key={index} src={preview} alt={`Image ${index + 1}`} className="image-preview" />
            ))}
          </div>
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default HotelForm;
