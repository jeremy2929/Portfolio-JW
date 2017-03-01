import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  onDropChange(e) {
    var path = e.target.value
    window.open(path, '_blank')
  },
  onClickGitHub() {
    window.open("https://github.com/jeremy2929", '_blank')
  },
  render() {
    return (
      <header>
        <nav className="navBar">
            <div className="myInfoBox">
              <article className="myBox">
                <img className="myImage" src="/styles/jw.jpg"/>
                <div className="name_Info">
                  <h1 className="myName"> Jeremy Ward</h1>
                  <h2 className = "myContactInfo">     Cell:     210-459-6998</h2>
                  <h3 className = "myContactInfo">     Email:  jeremy2929@twc.com</h3>
                </div>
              </article>
            </div>
          <section className="navTopRight">
            <Link to="/" className="homeButton">Home</Link>
            <select className="projectsDropBox" onChange={this.onDropChange}>
                <option  value="Projects">Deployed Projects</option>
                <option  value="https://spurs-project.herokuapp.com">Spurs Blog Project</option>
                <option  value="https://tic-tac-toe-jw.herokuapp.com">Tic-Tac-Toe</option>
                <option value="https://dollartrak.herokuapp.com">DollarTrak Budget App</option>
            </select>
            <button className="gitHubButton" onClick={this.onClickGitHub}>GitHub Account</button>
            <Link to="/blog" className="blogLink">Posts</Link>
            <Link to="/photos" className="blogLink">Photos</Link>
            <Link to="/aboutMe" className="blogLink">About Me</Link>
          </section>
        </nav>
      </header>
    )
  }
})
