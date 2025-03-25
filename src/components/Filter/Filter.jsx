import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contactsSlice';
import styles from './Filter.module.css';

const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <input
      className={styles.filterInput}
      type="text"
      placeholder="Search contacts"
      value={filter}
      onChange={e => dispatch(setFilter(e.target.value))}
    />
  );
};

export default Filter;
