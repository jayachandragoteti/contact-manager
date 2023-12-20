import React, { useState } from 'react';
import './add-contact.css';

import { useNavigate } from 'react-router-dom';

export const AddContact = (props) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const validateEmail = (email) => {
    // Simple email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    // Simple phone validation allowing only digits
    const phoneRegex = /^\d+$/;
    return phoneRegex.test(phone);
  };

  const addContact = (e) => {
    e.preventDefault();
    if (!state.name || !state.email) {
      alert("Name and Email are mandatory!");
      return;
    }
    if (!validateEmail(state.email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (state.phone && !validatePhone(state.phone)) {
      alert("Please enter a valid phone number (digits only)");
      return;
    }
    props.addContactHandler(state);
    setState({ name: "", email: "", phone: "", address: "" });
    navigate('/')
  };

  return (
    <div className="form-container">
      <h2>Add Contact</h2>
      <form className="form" onSubmit={addContact}>
        <div className="field">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
            className="form-input"
            required
          />
        </div>
        <div className="field">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
            className="form-input"
            required
          />
        </div>
        <div className="field">
          <label className="form-label">Phone</label>
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={state.phone}
            onChange={(e) => setState({ ...state, phone: e.target.value })}
            className="form-input"
          />
        </div>
        <div className="field">
          <label className="form-label">Address</label>
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={state.address}
            onChange={(e) => setState({ ...state, address: e.target.value })}
            className="form-input"
          />
        </div>
        <button type="submit" className="form-button blue">Add</button>
      </form>
    </div>
  );
};
