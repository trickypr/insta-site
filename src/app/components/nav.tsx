import * as React from 'react'
import { Link } from 'react-router-dom'

import './nav.css'

export const Nav: React.FC = () => (
  <div className="nav">
    <div style={{float: 'left'}}><Link to="/">TrickyPR</Link></div>

    <div><Link to="/images">Photos</Link></div>
    <div><Link to="/">Home</Link></div>
  </div>
)