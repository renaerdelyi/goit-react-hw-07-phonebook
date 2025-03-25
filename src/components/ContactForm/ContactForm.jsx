import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Importăm useSelector
import { addContact } from '../../redux/contactsSlice';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  // Extragem contactele din store-ul Redux
  const contacts = useSelector(state => state.contacts.contacts); // Folosim useSelector pentru a obține lista de contacte

  const handleSubmit = e => {
    e.preventDefault();

    // Verificăm dacă există deja un contact cu același nume
    const existingContact = contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (existingContact) {
      alert(`${name} este deja în contactele tale`);
      return;
    }

    // Adăugăm contactul
    dispatch(addContact({ id: nanoid(), name, number }));

    // Resetăm formularul
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Nume"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        className={styles.input}
        type="tel"
        placeholder="Număr de telefon"
        value={number}
        onChange={e => setNumber(e.target.value)}
        required
      />
      <button className={styles.submitButton} type="submit">
        Adaugă Contact
      </button>
    </form>
  );
};

export default ContactForm;