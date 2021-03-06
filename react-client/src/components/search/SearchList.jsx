import React, { Component } from "react";
import Teacher from "./Teacher.jsx";
import $ from "jquery";
import NavBar from '../nav.jsx';

//returns a boolean output (if query matches name OR do nothing if no query)
function searchFilter(searchQuery) {
  return function (a) {
    return (
      a.region.toLowerCase().includes(searchQuery.toLowerCase()) || !searchQuery
    );
  };
}
class SearchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teachers: [],
      categorie: "",
      searchQuery: ""
    };
    this.inputHandler = this.inputHandler.bind(this);
    this.onSubmit = this.onSubmit.bind(this)
  }
  async componentDidMount() {
    let categorie = window.query;
    await this.getAnnounces(categorie)
  }
  getAnnounces(categorie) {
    $.get(`/announces/${categorie}`).then(res => {
      this.setState({ teachers: res });
    });
  }
  async onSubmit(event) {
    event.preventDefault();
    let categorie = this.state.categorie;
    await this.getAnnounces(categorie)
  }
  inputHandler(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { teachers, searchQuery, categorie } = this.state;
    return (
    <div>
        <NavBar />
         <div className="cover bg-center w-100 vh-50 dt" style={{ backgroundImage: `url(https://i.ibb.co/3ssFkBX/OO0122373-Blue-abstract-background-design-copy-copy.jpg)`}}>
      <main className="pa4 white center" style={{ position: 'absolute', top: '25%', right: '50%', transform: 'translate(50%, -25%)', opacity: '1' }}>
            
            <div className="dtc v-mid">
              <div className="tc ph3">

                <div id="form" className='tc'>
                  <div className='ListSearch'>
                    <input className="tc br3 f9 black ba b--white grow v-mid dib no-underline ph5 pv3 mb3 bg-white-80 w-100" type="text" name="searchQuery" onChange={this.inputHandler} value={searchQuery} placeholder="Search by region..." /><br />
                    <input className="tc br3 f9 black ba b--white grow v-mid dib no-underline ph5 pv3 mb3 bg-white-80 w-100" type="tesxt" name="categorie" onChange={this.inputHandler} value={categorie} placeholder="Search by category..." />
                  </div>
                  {/*<button className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3" type='submit' onClick={this.onSubmit}>Search</button>*/}
                  <a className="f9 br3 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3 hover-white" href="#" onClick={this.onSubmit} >Search</a>
                  
                </div>
              </div>
            </div>
            <section className="" style={{ position: 'absolute', top: '120%', right: '50%', transform: 'translate(50%, -25%)', opacity: '1' }}>
          <div>
        <section className="cf pt4 pb2 mw8 black">
          {
             teachers.filter(searchFilter(searchQuery)).map((elm, i) => (
              <div key={elm._id} >
                  <Teacher data={elm} />
              </div>
            ))
          }
        </section>
      </div>
        </section>
        </main>
          </div>
    </div>
    );
  }
}
export default SearchList;
 
 

{/*<article>
<h2 className="f3 fw4 pa3 mv0">
Albums
</h2>
<div className="cf pa2">

  

</div>
</article>*/}