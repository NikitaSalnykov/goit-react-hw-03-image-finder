import React, { Component } from 'react'
import { GalleryList } from './ImageGallery.styled'
import { getImages } from 'services/pixabayAPI'
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';


export const ImageGallery =({gallery, showModal})=>{
  
    return (
      <GalleryList>
      {
          gallery.map(el => {
            return <ImageGalleryItem
              key={el.id} img={el.webformatURL} largeImageURL={el.largeImageURL} tags={el.tags} showModal={showModal} />
          })
        }
      </GalleryList>
  )
  }



