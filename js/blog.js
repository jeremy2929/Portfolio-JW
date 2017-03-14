import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  scrollUp(){
    window.scroll(0, 0)
  },
  render() {
    return (
      <section className="postsSection">
        <h1 className="postsTextTitle">   I collect various quotes and sayings as I encounter them:</h1>
        <p className="postsText">1.  The past is a construct of the mind.  It blinds us and fools us into believing it.  But the heart wants to live in the present.</p>
        <p className="postsText">2.  Learning is the continuous discovery of your own ignorance.</p>
        <p className="postsText">3.  Life breaks all of us, but the strong get stronger in the broken places.</p>
        <p className="postsText">4.  Voluntary change usually only occurs when the pain of remaining the same exceeds the fear of change.</p>
        <p className="postsText">5.  Money is a tool, not a toy.</p>
        <p className="postsText">6.  The secret to happiness is something to do, something to hope for, and something to love.</p>
        <p className="postsText">7. If one advances confidently in the direction of his dreams, and endeavors to live the life which he has imagined, he will meet with a success unexpected in common hours.</p>
        <p className="postsText">8. Willful ignorance is a liberty, but coupled with a strong opinion, it's a mistake.</p>
        <p className="postsText">9. Use your fear. It can take you to a place where your courage is stored.</p>
        <p className="postsText">10. If there is something worthy you want, it's not something you can accomplish in one day.  It doesn't matter your pace, and it doesn't matter your strengths or weaknesses, as long as you keep pushing forward, you are achieving something.</p>
        <p className="postsText">11. There are no limits. There are only plateaus, and you must not stay there.  You must go beyond them.</p>
        <button className="topButton" onClick={this.scrollUp}>Top of Page</button>
      </section>
    )
  }
})
