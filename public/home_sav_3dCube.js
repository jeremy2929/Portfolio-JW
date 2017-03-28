import React from 'react'
import {Link} from 'react-router'
import Projects from './projects'
import Blog from './blog'

export default React.createClass({
  render() {
    return (
        <section className="titleBoxOuter">
          <article className="titleBox">
            <h1 className="titleName">Jeremy Ward</h1>
              <div>
                <p className="titleDetailHTML">HTML</p>
                <p className="titleDetailCSS">CSS</p>
                <p className="titleDetailJavaScript">JavaScript</p>
                <p className="titleDetailREACT">REACT</p>
                <p className="titleDetailFireBase">FireBase</p>
                <Projects/>
              </div>
          </article>
        
        </section>
    )
  }
})
