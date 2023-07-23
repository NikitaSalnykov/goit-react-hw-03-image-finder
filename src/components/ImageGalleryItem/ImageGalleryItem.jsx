import React from 'react';
import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';
import { HiSearchCircle } from 'react-icons/hi';

export const ImageGalleryItem = ({ img, largeImageURL, tags, showModal }) => {
  const cutTags = tags.length > 25 ? tags.slice(0, 25) + '...' : tags;
  return (
    <GalleryItem>
      <GalleryItemImg
        src={
          img || 'https://cid.center/wp-content/uploads/2020/11/placeholder.png'
        }
        alt={tags}
        onClick={() => showModal({ largeImageURL, tags })}
      />
      <p>
        <HiSearchCircle />
        {cutTags}
      </p>
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  img: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  showModal: PropTypes.func.isRequired,
};
