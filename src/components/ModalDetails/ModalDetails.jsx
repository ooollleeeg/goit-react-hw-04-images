import PropTypes from 'prop-types';

const ModalDetails = ({ largeImageURL, tags }) => {
  return (
    <div>
      <img src={largeImageURL} alt={tags} />
    </div>
  );
};

export default ModalDetails;

ModalDetails.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
