/* eslint-disable react/prop-types */
import * as React from 'react'

interface imageData {
  title: string
  description: string
  likes: number
  postID: string
  date: string | Date
  img: string[]
}

interface image {
  image: imageData
}

import './image.css'

export const ImageGridItem: React.FC<image> = ({ image }) => {
  const { img, title, description, postID } = image

  return (
    <a className="img-group" href={`/img/${postID}`}>
      <div className="img" style={{ backgroundImage: `url(/${img[0]})`}} />

      <div className="info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </a>
  )
}