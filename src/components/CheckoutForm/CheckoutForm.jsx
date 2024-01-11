import React, { useEffect, useState } from "react";

const CheckoutForm = ({formData,setFormData }) => {

const [errorEmpty, setErrorEmpty] = useState("");
const [errorEmail, setErrorEmail] = useState("");

const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [id]: value
    }));
  };
  useEffect(() => {
    if (
        !formData.name ||
        !formData.lastName ||
        !formData.email ||
        !formData.confirmationEmail ||
        !formData.address ||
        !formData.city_locality ||
        !formData.postal_code ||
        !formData.country_code
    ) {
      setErrorEmpty("Please Input some Information");
    } else {
        setErrorEmpty(""); // Clear the error when all fields are filled
      }
  }, [formData]);

  useEffect(() => {
    if (formData.email !== formData.confirmationEmail) {
      setErrorEmail("Emails do not match");
    } else {
      setErrorEmail(""); // Clear the error when emails match
    }
  }, [formData.email, formData.confirmationEmail]);

  return (
    <form className="ml-6 md:ml-10">
      {/* FIRST ROW */}
      <div className="grid grid-cols-1 md:grid-cols-6 pt-4 gap-2">
        <div className="grid col-span-2 formInput">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            placeholder="John "
            value={formData.name}
            onChange={handleChange}
          />
          <p>{!formData.name && errorEmpty}</p>
        </div>

        <div className="grid col-span-2 formInput">
          <label htmlFor="lastName">Last Name: </label>
          <input
            type="text"
            id="lastName"
            placeholder="Smith"
            value={formData.lastName}
            onChange={handleChange}
          />
          <p>{!formData.lastName && errorEmpty}</p>
        </div>

        <div className="grid col-span-2 formInput">
          <label htmlFor="phone">Phone: </label>
          <input
            type="number"
            id="phone"
            placeholder="+33628552429"
            value={formData.phone}
            onChange={handleChange}
          />
          <p>{!formData.phone && errorEmpty}</p>
        </div>
      </div>
      {/* SECOND ROW */}
      <div className="grid grid-cols-1 md:grid-cols-6 pt-4 gap-2">
        <div className="grid col-span-3 formInput">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            placeholder="john.smith@xyz.com"
            value={formData.email}
            onChange={handleChange}
          />
          <p>
          {!formData.email ? errorEmpty : (formData.email !== formData.confirmationEmail ? errorEmail : '')}
          </p>
        </div>

        <div className="grid col-span-3 formInput">
          <label htmlFor="confirmationEmail">Confirm email: </label>
          <input
            type="email"
            id="confirmationEmail"
            placeholder="john.smith@xyz.com"
            value={formData.confirmationEmail}
            onChange={handleChange}
          />
          <p>{!formData.confirmationEmail ? errorEmpty : (formData.email !== formData.confirmationEmail ? errorEmail:"")}</p>
        </div>
      </div>
      {/* THIRD ROW */}
      <div className="grid grid-cols-1 md:grid-cols-7 pt-4 gap-2">
        <div className="grid col-span-3 md:col-span-2 formInput">
          <label htmlFor="country_code">Country: </label>
          <input
            type="text"
            id="country_code"
            placeholder="Japan"
            value={formData.country_code}
            onChange={handleChange}
          />
          <p>{!formData.country_code && errorEmpty}</p>
        </div>
        <div className="grid col-span-3 formInput">
          <label htmlFor="city_locality">City/Locality: </label>
          <input
            type="text"
            id="city_locality"
            placeholder="Tokyo"
            value={formData.city_locality}
            onChange={handleChange}
          />
          <p>{!formData.city_locality && errorEmpty}</p>
        </div>
        <div className="grid col-span-3 md:col-span-2 formInput">
          <label htmlFor="postal_code">Postal Code: </label>
          <input
            type="number"
            id="postal_code"
            placeholder="121-0034"
            value={formData.postal_code}
            onChange={handleChange}
          />
          <p>{!formData.postal_code && errorEmpty}</p>
        </div>
      </div>
      {/* FORTH ROW */}
      <div className="grid grid-cols-6 pt-4">
        <div className="grid col-span-6 formInput">
          <label htmlFor="address">Address: </label>
          <input
            type="text"
            id="address"
            placeholder="Koto-ku 2-2-1"
            value={formData.address}
            onChange={handleChange}
          />
          <p>{!formData.address && errorEmpty}</p>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
