import PropTypes from 'prop-types';

import styles from './imageGallery.module.scss';

const ImageGallery = ({ children }) => {
  return (
    <>
      <ul className={styles.imageGallery}>{children}</ul>
    </>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  children: PropTypes.element.isRequired,
};
