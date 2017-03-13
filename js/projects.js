import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  dollarTak() {
    window.open("https://dollartrak.herokuapp.com", '_blank')
  },
  spursBlog() {
    window.open("https://spurs-project.herokuapp.com", '_blank')
  },
  tic_tac_toe() {
    window.open("https://tic-tac-toe-jw.herokuapp.com", '_blank')
  },
  render() {
    return (
      <section className="projectsArea">
          <h1 className="projectsTitle">Projects:</h1>
          <img className="dollarTrakImage" src="styles/DollarTrak.png" onClick={this.dollarTak}/>
          <img className="spursBlogImage" src="styles/SpursBlog.png" onClick={this.spursBlog}/>
          <img className="tic-tac-toeImage" src="styles/tic-tac-toe.png" onClick={this.tic_tac_toe}/>
      </section>
    )
  }
})
