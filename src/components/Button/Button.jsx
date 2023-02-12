import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const Button = ({ text, loadMore }) => {
  return (
    <button onClick={loadMore} className={styles.buttonLoad} type="button">
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
  text: PropTypes.string.isRequired,
  loadMore: PropTypes.func.isRequired,
};
