import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);

  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={styles.contactList}>
      {contacts.map(contact => (
        <li key={contact.id} className={styles.contactItem}>
          <span>
            {contact.name}: {contact.number}
          </span>
          <button
            onClick={() => handleDelete(contact.id)}
            className={styles.deleteButton}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
