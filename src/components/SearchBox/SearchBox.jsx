import { useId } from 'react';
import styles from './SearchBox.module.css';

const SearchBox = ({ valueFilter, handleChange }) => {
  const filterId = useId();

  return (
    <div className={styles.SearchBox}>
      <label htmlFor={filterId}>Find contact by name</label>
      <input
        type="text"
        name="SearchBox"
        value={valueFilter}
        onChange={handleChange}
        id={filterId}
      />
    </div>
  );
};

export default SearchBox;
