import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import './contacts-list.css';
import { useNavigate } from 'react-router-dom';

export const ContactsList = (props) => {

  const navigate = useNavigate();
  const { contacts } = props;

  const handleEditContact = (props)=>{

  }
  const handleDeleteContact = (props)=>{

  }

  return (
    <div className="contacts-container">
      <h2>All Contacts</h2>
      {contacts.length === 0 ? (
        <p>No contacts available</p>
      ) : (
        <ul className="contacts-list">
          {contacts.map((contact, index) => (
            <li key={index} className="contact-card" >
            <div className="contact-header">
              <strong>{contact.name}</strong>
              <div className="contact-icons">
                <FontAwesomeIcon icon={faEdit} className="edit-icon" onClick={() => handleEditContact(contact.id)} />
                <FontAwesomeIcon icon={faTrash} className="delete-icon" onClick={() => props.removeContactHandler(contact.id)} />
              </div>
            </div>
              <div className="contact-details" onClick={()=>{navigate('/'+contact.id)}}>
                <p><FontAwesomeIcon icon={faEnvelope} /> {contact.email}</p>
                {contact.phone && <p><FontAwesomeIcon icon={faPhone} /> {contact.phone}</p>}
                {contact.address && <p><FontAwesomeIcon icon={faMapMarkerAlt} /> {contact.address}</p>}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};