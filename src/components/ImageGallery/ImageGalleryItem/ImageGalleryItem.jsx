import { memo } from 'react';

import PropTypes from 'prop-types';
import styles from './imageGalleryItem.module.scss';

const ImageGalleryItem = ({ items, showBigImage }) => {
  const elements = items.map(({ id, webformatURL, largeImageURL, tags }) => (
    <li
      onClick={() => showBigImage({ largeImageURL, tags })}
      key={id}
      className={styles.galleryItem}
    >
      <img src={webformatURL} className={styles.galleryItemImage} alt={tags} />
    </li>
  ));
  return elements;
};

export default memo(ImageGalleryItem);

ImageGalleryItem.defaultProps = {
  items: [],
};

ImageGalleryItem.propTypes = {
  showBigImage: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};
