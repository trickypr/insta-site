/* eslint-disable react/prop-types */
import * as React from 'react'
import { useState } from 'react'

import {useLocation} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faClock } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

import { formatDistance } from 'date-fns'

import images from '../img/images.json'
import NotFound from './404'

import './image.css'

interface SlideProps {
  img: any
  active: boolean
}

interface SlideShowProps {
  images: any
}

const Slide: React.FC<SlideProps> = ({img, active}) => (
  <div className="slideshow-slide" style={{ display: active ? 'block' : 'none' }}>
    <img src={`/app/img/${img}`} width="100%" />
  </div>
)

const SlideShow: React.FC<SlideShowProps> = ({images}) => {
  const [image, setImage] = useState(0);

  if (image >= images.length || images < 0) setImage(0)

  return (
    <>
      <div className="img-slideshow">
        {
          images.map((img, i) => (
            <Slide img={img} active={i === image} key={i} />
          ))
        }

        <a className="prev" onClick={() => setImage(image - 1)}>&#10094;</a>
        <a className="next" onClick={() => setImage(image + 1)}>&#10095;</a>
      </div>

      <div style={{ textAlign: "center" }}>
        {
          images.map((img, index) => <span className={`dot ${index === image ? 'active' : ''}`} onClick={() => setImage(index)} key={index} />)
        }
      </div>
    </>
  )
}

const ImagePage: React.FC = () => {
  const url = useLocation().pathname.replace('/img/', '')

  const possibleImage = images.find(({postID}) => postID === url)  
  const date = formatDistance(new Date(possibleImage.date), new Date(), { addSuffix: true })

  const [currentImg, setCurrentImg] = useState(possibleImage.img[0] || '')

  const changeImage = e => {
    console.log(e)
  }

  return (
    <div className="image">
      {
        !possibleImage ? <NotFound /> :
        (
          <>
            <h1>{possibleImage.title}</h1>

            {possibleImage.img.length === 1 ? <img src={`/app/img/${possibleImage.img[0]}`} alt={possibleImage.description} style={{ width: '100%' }} /> : 
              <SlideShow images={possibleImage.img} />
            }

            <div className="image-data-grid">
              <div>
                <FontAwesomeIcon icon={faClock} />
                {date}
              </div>
              <div>
                <FontAwesomeIcon icon={faHeart} />
                <span>{possibleImage.likes} likes</span>
              </div>
              <div>
                <a href={`https://www.instagram.com/p/${possibleImage.postID}/`}><FontAwesomeIcon icon={faInstagram} /></a>
                <a href={`https://www.instagram.com/p/${possibleImage.postID}/`}>Instagram</a>
              </div>
            </div>

            <p>{possibleImage.description}</p>
          </>
        )
      }
    </div>
  )
}

export default ImagePage