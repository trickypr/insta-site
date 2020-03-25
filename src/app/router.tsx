import * as React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Nav } from './components/nav'
import { Home } from './pages/home'

export const SiteRouter: React.FC = () => (
  <Router>
    <div>
      <Nav></Nav>

      <Switch>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </div>
  </Router>
)

export default SiteRouter