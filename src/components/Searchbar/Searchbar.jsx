import PropTypes from 'prop-types';
import { memo } from 'react';

import initialState from './initialState';

import useForm from 'shared/hooks/useForm';

import styles from './searchbar.module.scss';

const Searchbar = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { search } = state;

  return (
    <div>
      <header className={styles.searchbar}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <button type="submit" className={styles.button}>
            <span className={styles.button__label}>Search</span>
          </button>

          <input
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="search"
            value={search}
            onChange={handleChange}
            required
          />
        </form>
      </header>
    </div>
  );
};

export default memo(Searchbar);

Searchbar.propType = {
  onSubmit: PropTypes.func.isRequired,
};
