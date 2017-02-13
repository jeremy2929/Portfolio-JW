import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  onClickAboutMe(){
    alert("   Front End Developer: An individual defined by a strong and honest work ethic with a natural curiosity for learning and attention to detail who believes worthy achievements only come from dedication and perseverance to reach the ultimate goal...")
  },
  render() {
    return (
      <header>
        <nav className="navBar">
          <Link to="/">
            <div className="myInfoBox">
              <h1 className="myName" onClick={ this.onClickAboutMe }>  Jeremy Ward</h1>
              <p className = "myTitle">Front-end Developer</p>
            </div>
          </Link>
          <section className="navTopRight">
            <a href="https://github.com/jeremy2929">
              <p className="homeLinks">Github Account         </p>
            </a>
            <Link to="/project" className="homeLinks">View Projects            </Link>
            <Link to="/blog" className="homeLinks">View Blogs               </Link>
          </section>
        </nav>
      </header>
    )
  }
})
