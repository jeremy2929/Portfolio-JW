import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <section className="photosPage">

        <h1 className="theIronYardTitle">My experience at  </h1>
          <a className="theIronYard" href="https://www.theironyard.com/courses.html#front-end-engineering">The Iron Yard:
          </a>
          <img className="imageTIY" src="/styles/TIY.jpg"/>
          <img className="imageCert" src="/styles/cert.png"/>

        <div>
            <p className="caption1">In the beginning...</p>
          <img className="photos" src="/styles/1.jpg"/>
            <p className="caption1">Holiday Season...</p>
          <img className="photos" src="/styles/2.jpg"/>
            <p className="caption1">My Birthday...</p>
          <img className="photos" src="/styles/3.jpg"/>
            <p className="caption1">End of Week 8...</p>
          <img className="photos" src="/styles/7.jpg"/>
          <img className="photos" src="/styles/4.jpg"/>
            <p className="caption1">Guest Speakers...</p>
          <img className="photos" src="/styles/5.jpg"/>
            <p className="caption1">An exercise in communication...</p>
          <img className="photos" src="/styles/6.jpg"/>
            <p className="caption1">An intense instruction session...</p>
          <img className="photos" src="/styles/8.jpg"/>
        </div>
        <div className="photosFooter">
          <Link to="/" className="homeButton homeButton_bottom">Home</Link>
        </div>
      </section>
    )
  }
})
