import 'babel-polyfill'

import * as React from 'react'
import ReactDom from 'react-dom'
import { SiteRouter } from './router'

import './main.css'

ReactDom.render(<SiteRouter />, document.getElementById('root'))