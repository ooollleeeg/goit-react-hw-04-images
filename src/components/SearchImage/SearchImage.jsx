import { useState, useEffect, useCallback } from 'react';

import { getImage } from 'components/API/API';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import ImageGalleryItem from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import ModalDetails from 'components/ModalDetails/ModalDetails';
import Loader from 'components/Loader/Loader';

import styles from './searchImage.module.scss';

const SearchImage = () => {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [modalDetails, setModalDetails] = useState(null);

  useEffect(() => {
    if (!search) {
      return;
    }
    const fetchImages = async () => {
      try {
        setLoading(true);
        const data = await getImage(search, page);
        setItems(prevItems => [...prevItems, ...data.hits]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [search, page, setLoading, setItems, setError]);

  const onSearchImages = useCallback(({ search }) => {
    setSearch(search);
    setItems([]);
    setPage(1);
  }, []);

  const showBigImage = useCallback(data => {
    setModalDetails(data);
    setShowModal(true);
  }, []);

  const loadMore = useCallback(() => {
    setPage(prevPage => prevPage + 1);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
    setModalDetails(null);
  }, []);

  return (
    <>
      <Searchbar onSubmit={onSearchImages} />
      <ImageGallery>
        <ImageGalleryItem items={items} showBigImage={showBigImage} />
      </ImageGallery>
      {loading && <Loader />}
      {error && (
        <p className={styles.errorMessage}>
          Something went wrong. Error: {error}. Please try again later
        </p>
      )}
      {Boolean(items.length) && <Button loadMore={loadMore} text="load more" />}
      {showModal && (
        <Modal close={closeModal}>
          <ModalDetails {...modalDetails} />
        </Modal>
      )}
    </>
  );
};

export default SearchImage;
