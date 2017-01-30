import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  onClickAboutMe(){
    alert("   I was born and raised in Houston, coming to San Antonio in Sept 2008, indirectly because of Hurricane Ike.  My interest in code began in 6th grade on a PET Commodore computer.  My first computer was a Commodore VIC-20.  I worked IT from 1990 to 2003 in Houston, first as a Computer Operator on mainframes for 3 years, then as Network Admin and Programmer for 7 years, but have not worked in the IT industry for 12 years. Since 2004, I have driven my own pickup for contract delivery, driving over 500,000 miles. The main reason I came to San Antonio is because I had sold my house in Rosenberg and took a cross country motorcycle trip to Washington DC and back. While I was gone, Hurricane Ike hit the Houston area and when I returned, everything was still in chaos. I had a friend who needed a roommate in San Antonio so I came here and wound up staying.  I heard about The Iron Yard and became interested so I did some research.  The more I learned, the more my interest in coding returned, and thus I enrolled and it has been immensely enjoyable to me.")
  },
  render() {
    return (
      <header>
        <nav className="navBar">
          <Link to="/" className="homeLinks">Home Page          </Link>
          <Link to="/project" className="homeLinks">View Projects            </Link>
          <Link to="/blog" className="homeLinks">View Blogs               </Link>
          <p className="bioLink" onClick={ this.onClickAboutMe }>About Me</p>
          <h1 className="titleBox">
            <p className="titleName">                      Jeremy Ward</p>
          </h1>
        </nav>
      </header>
    )
  }
})
