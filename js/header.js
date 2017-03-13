import React from 'react'
import { Link } from 'react-router'



export default React.createClass({
  onDropChange(e) {
    var path = e.target.value
    if (path != "Projects") {
      window.open(path, '_blank')
    }
  },
  onClickGitHub() {
    window.open("https://github.com/jeremy2929", '_blank')
  },
  hoverOnMyImage() {
    this.refs.myImage.className = "myImageLarge"
  },
  hoverOffMyImage() {
    this.refs.myImage.className = "myImage"
  },
  render() {
    return (
      <header>
        <nav className="navBar">
            <div className="myInfoBox">
              <article className="myBox">
                <img className="myImage" ref="myImage" src="/styles/jw.jpg" onMouseEnter={this.hoverOnMyImage} onMouseLeave={this.hoverOffMyImage}/>
                <div className="name_Info">
                  <h1 className="myName"> Jeremy Ward</h1>
                  <h2 className = "myContactInfo"> Cell:     210-459-6998</h2>
                  <h3 className = "myContactInfo"> Email:  jeremy2929@twc.com</h3>
                </div>
              </article>
            </div>
          <section className="navTopRight">
            <Link to="/" className="homeButton">Home</Link>

            <button className="gitHubButton" onClick={this.onClickGitHub}>GitHub</button>
            <Link to="/blog" className="postsButton">Posts</Link>
            <Link to="/photos" className="photosButton">Photos</Link>
            <Link to="/aboutMe" className="aboutMe">Bio</Link>
          </section>
        </nav>
      </header>
    )
  }
})
