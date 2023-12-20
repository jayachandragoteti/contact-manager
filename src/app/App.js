import React, { useState, useEffect } from "react";
import './App.css';
import { v4 as uuid } from "uuid";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { AddContact, ContactView, ContactsList } from "./pages";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  return (
    <Router>
      <div className="container app-container">
        <Navbar />
        <div className="content-container">
          <div className="content">
          <Routes>
            <Route path="/" element={<ContactsList contacts={contacts} removeContactHandler={removeContactHandler} />} />
            <Route path="/:id" element={<ContactView />} />
            <Route path="/add-contact" element={<AddContact addContactHandler={addContactHandler} />} />
          </Routes>
          </div>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
