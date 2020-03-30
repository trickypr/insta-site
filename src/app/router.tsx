import * as React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Nav } from './components/nav'
import { Home } from './pages/home'
import { ContactPage } from './pages/contact'

export const SiteRouter: React.FC = () => (
  <Router>
    <div>
      <Nav></Nav>

      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/contact">
          <ContactPage></ContactPage>
        </Route>
      </Switch>
    </div>
  </Router>
)

export default SiteRouter