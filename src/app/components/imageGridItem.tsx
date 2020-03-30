/* eslint-disable react/prop-types */
import * as React from 'react'

interface imageData {
  title: string
  description: string
  likes: number
  post_id: number
  date: string | Date
  img: string[]
}

interface image {
  image: imageData
}

import './image.css'

export const ImageGridItem: React.FC<image> = ({ image }) => {
  const { img, title, description } = image

  return (
    <div className="img-group">
      <div className="img" style={{ backgroundImage: `url(/app/img/${img[0]})`}} />

      <div className="info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}