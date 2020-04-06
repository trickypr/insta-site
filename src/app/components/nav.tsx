import * as React from 'react'
import { Link } from 'react-router-dom'

import './nav.css'

const unsortedLinks = [
  {url: "/", text: "Home", index: 0}, 
  {url: "/images", text: "Photos", index: 1},
  {url: "/contact", text: "Contact", index: 2},
  {url: '/helpful', text: 'Helpful things', index: 3}
]

export const Nav: React.FC = () => {
  const [navOpen, setNavOpen] = React.useState(false)
  const toggleNav = () => setNavOpen(!navOpen)

  const list = unsortedLinks.sort((a, b) => {
    if (navOpen) return a.index - b.index
    else return b.index - a.index
  }).map(({url, text, index}) => (
    <Link to={url} key={index} onClick={() => setNavOpen(false)}>{text}</Link>
  ))

  return (
    <div className={`nav ${navOpen ? 'responsive' : ''}`}>
      <Link to="/" style={{float: 'left', display: navOpen ? 'none' : 'inherit'}}>TrickyPR</Link>

      {list}

      <a href="#" className="icon" onClick={toggleNav}><i className="fa fa-bars" /></a>
    </div>
  )
}