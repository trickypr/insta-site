import * as React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Nav } from './components/nav'
import Footer from './components/footer'

const Home = React.lazy(async () => await import('./pages/home'))
const ContactPage = React.lazy(() => import('./pages/contact'))
const Images = React.lazy(() => import('./pages/images'))
const ImagePage = React.lazy(() => import('./pages/image'))
const HelpfulLinks = React.lazy(() => import('./pages/helpful'))
const NotFound = React.lazy(() => import('./pages/404'))

export const SiteRouter: React.FC = () => (
  <Router>
    <div>
      <Nav></Nav>

      <React.Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/contact">
            <ContactPage></ContactPage>
          </Route>

          <Route path="/images">
            <Images />
          </Route>

          <Route path="/img">
            <ImagePage />
          </Route>

          <Route path="/helpful">
            <HelpfulLinks />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch> 
      </React.Suspense>

      <Footer />
    </div>
  </Router>
)

export default SiteRouter