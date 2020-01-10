import React from 'react';
import Carte from './top-teachers/Carte.jsx';
import Search from './search/Search.jsx';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.test = localStorage.getItem('token')
    console.log(this.test)
  }
  render() {
    return (
      <div  className="sans-serif" data-gr-c-s-loaded="true" style={{overflow: 'visible'}}>
        <header className="bg-white w-100 ph3 pv3 pv4-ns ph4-m ph5-l bb b--light-gray">
          <nav className="tc">
            <div className="db dib-ns tc mb3 mb0-ns">
              <a href="https://www.sublimehq.com/store/text" title="EduWhere Logo" className="link dim b mr0 mr3-ns f3 ba bw2 b--black" style={{color: 'purple', borderColor: 'purple'}}>EdWe</a>
            </div>
            <a className="link dim black b tc f6 f5-ns db dib-ns mr0 mr3-ns mb3 mb0-ns" href="/login" title="Login">Login</a>
            <a className="link dim gray tc f6 f5-ns db dib-ns mr0 mr3-ns mb3 mb0-ns" href="/signup" title="Sign Up">Sign Up</a>
            <a className="link dim gray tc f6 f5-ns db dib-ns mr0 mr3-ns mb3 mb0-ns" href="/add" title="Add an announce">Add an announce</a>
            <a className="link dim gray tc f6 f5-ns db dib-ns mr0 mr3-ns mb0" href="/contact" title="Contact">Contact</a>
          </nav>
        </header>
        <Search />
        <Carte />
      </div>
    )
  }

}
export default Home;
