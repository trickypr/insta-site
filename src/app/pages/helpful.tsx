import * as React from 'react'

import './helpful.css'

const HelpfulLinks: React.FC = () => (
  <article>
    <h1>Helpful Links and videos</h1>
    <p>Some helpful videos and links for getting started with photography</p>

    <h2>Videos</h2>

    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Cb5bjlnDkCs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    <p>If you want to start taking better photos, no mater what camera you are using, this video will help you a lot.</p>

    <br />

    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/AywNcZL6IQQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    <p>This is another video Peter McKinnon about how to take better pictures on your iPhone.</p>

    <br />

    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/n-89XlD2ZUg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    <p>This is a video about how to leverage instagram better. Something I need to do better.</p>

    <br />

    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/WGMDXOr4LmI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    <p>A video on how to edit your photos better.</p>

    <br />

    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Ys63jdks26E" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    <p>Better use of the lightroom app and attachable phone camera lenses.</p>

    <h2>Helpful links</h2>

    <p>I use <a href="https://affinity.serif.com/en-gb/photo/">affinity photo</a> as a replacement for photoshop. It may be cheeper in the long run, but it has better implementation of features and better performance than photoshop. Its a really powerful tools with great focus stacking, clone and retouch tools.</p>

    <p><a href="https://camera.plus/">Camera+ 2</a> is my main photo tool. You can get it on the <a href="https://apps.apple.com/us/app/camera-2/id1313580627">app store</a>. And if you want here is a <a href="https://www.imore.com/camera-2-review-all-one-photo-app-rebuilt-scratch#universal">review</a> of it.</p>

    <p>This website was developed with <a href="https://reactjs.org/">react</a> and <a href="https://reacttraining.com/react-router/">react router</a>. This is all written in <a href="https://www.typescriptlang.org/">typescript</a> and <a href="https://parceljs.org/">transpiled</a> using parcel. The code for this can be found on the <a href="https://github.com/trickypr/insta-site">Github</a> repo.</p>
  </article>
)

export default HelpfulLinks