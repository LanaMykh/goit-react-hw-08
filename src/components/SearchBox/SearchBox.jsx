import { useId } from 'react';
import styles from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';

const SearchBox = () => {
  const filterId = useId();
  const dispatch = useDispatch();
  const valueFilter = useSelector(selectNameFilter);
  const handleChange = event => {
    dispatch(changeFilter(event.target.value));
  };

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
