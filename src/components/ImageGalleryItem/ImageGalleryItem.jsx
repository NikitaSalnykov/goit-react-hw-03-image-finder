import React from 'react'
import { GalleryItem, GalleryItemImg } from './ImageGalleryItem.styled'
import PropTypes from 'prop-types'

export const ImageGalleryItem = ({ img, largeImageURL, tags, showModal }) => {
  const cutText = tags.length > 25 ? tags.slice(0, 25) + '...' : tags;
  return (
      <GalleryItem>
      <GalleryItemImg src={img} alt={tags}  onClick={()=> showModal({largeImageURL, tags})}/>
      <p><b>Tags: </b>{cutText}</p>
      </GalleryItem>
  )
}

