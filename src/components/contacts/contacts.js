import React from 'react';
import './contacts.css'

const Contacts = ({ contacts, onDelete }) => {
  return (
    <ul className='contacts-list'>
      {contacts.map(el => (
        <li className='contacts-item' key={el.id}>{el.name}: {el.number}
        <button className='contacts-btn' type='button' onClick={() => onDelete(el.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
