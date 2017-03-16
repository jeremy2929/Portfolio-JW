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
        <article className="cubeArea">
          <div className="wrap"  >
            <div className="cubeOut">
           <div className="cube">
             <h1 className="projectTitle">Projects</h1>
               <div className="front">
                 <p className="textFront">DollarTrak</p>
                 <img className="dollarTrakImageCube" src="styles/DollarTrak.png" onClick={this.dollarTak}/>
               </div>
               <div className="back">
                 <p className="textBack">More To Come</p>
               </div>
               <div className="top"></div>
               <div className="bottom"></div>
               <div className="left">
                 <p className="textLeft">Spurs Blog</p>
                <img className="spursBlogImageCube" src="styles/SpursBlog.png" onClick={this.spursBlog}/>
                </div>
               <div className="right">
                 <p className="textLeft">Tic-Tac-Toe</p>
                 <img className="tic-tac-toeImageCube" src="styles/tic-tac-toe.png" onClick={this.tic_tac_toe}/>
               </div>
           </div>
         </div>
         </div>
        </article>
      </section>
    )
  }
})
