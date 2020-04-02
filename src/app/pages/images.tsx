// eslint-disable-next-line no-unused-vars
import * as React from 'react'

import { ImageGridItem } from '../components/imageGridItem'
import images from '../img/images.json'

import './images.css'

const Images: React.FC = () => (
  <div>
    <h2>Heres some images</h2>

    <div className="images">
    { 
      images.map((image, i) => (
        <ImageGridItem key={i} image={image} />
      ))
    }
    </div>
  </div>
)

export default Images