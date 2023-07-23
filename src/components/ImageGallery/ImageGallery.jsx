import React from 'react';
import { GalleryList } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export const ImageGallery = ({ gallery, showModal }) => {
  return (
    <GalleryList>
      {gallery.map(el => {
        return (
          <ImageGalleryItem
            key={el.id}
            img={el.webformatURL}
            largeImageURL={el.largeImageURL}
            tags={el.tags}
            showModal={showModal}
          />
        );
      })}
    </GalleryList>
  );
};

ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(PropTypes.object).isRequired,
  showModal: PropTypes.func.isRequired,
};
