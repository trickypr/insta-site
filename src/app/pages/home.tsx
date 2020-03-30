import * as React from 'react'

import { Images } from './images'

import './home.css'

export const Home = () => (
  <div id="home">
    <header>
      <div>
        <h1>_TrickyPR</h1>
        <p>A programer trying to take photographs</p>
      </div>
    </header>

    <div className="overlay-card">
      <p>I like to experiment. Whilst I am a programer at heart, I also have many different passions that I want to follow, some helpful, others not. Photography is one of those passions. Making something that is visually appealing is important in design and photography is a way I can do that. This site is a place where I show off the work I do.</p>
    </div>

    <Images />
  </div>
)