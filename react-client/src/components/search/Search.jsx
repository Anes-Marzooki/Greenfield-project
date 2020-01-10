import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: 'Math',
      teachers: ['Math', 'Physics', 'It', 'Science', 'Philosophy', 'Geography']
    };

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(event) {
    event.preventDefault();
    localStorage.setItem('query', this.state.searchInput)
    this.setState({ found: true })
  }
  goToResult() {
    return <Redirect to="/result" />
  }
  onChange(event) {
    this.setState({ searchInput: event.target.value })
  }

  render() {
    return (
      <div>
<header>
  <div className="cover bg-center w-100 vh-75 dt" style={{ backgroundImage: `url(https://i.ibb.co/5nnH0w2/bg.jpg)` }}>
    <div className="dtc v-mid">
      <div className="tc ph3">
        <div className="f2 f1-l fw2 white-90 mb0 lh-title">EduWhere</div>
        <h1 className="fw1 f3 white-80 mt3 mb4">We help you get connected with our teachers</h1>
        <a className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3" href="#" >Search by categories</a>
     <div id="form" className='tc'>
        <div className='mainSearch'>
          <form onSubmit={this.onSubmit}>
            <select id="region" onChange={this.onChange}>
              {
                this.state.teachers.map((elem, i) =>
                  <option value={elem} key={i}>{elem}</option>
                )
              }
            </select>
            <button type='submit' >Search</button>
          </form>
        </div>
        {this.state.found && this.goToResult()}
      </div>
      </div>
    </div>
  </div>
</header>
      </div>
    );
  }
}
export default Search;




// <div id="form" className='tc'>
//         <div className='mainSearch'>
//           <form onSubmit={this.onSubmit}>
//             <select id="region" onChange={this.onChange}>
//               {
//                 this.state.teachers.map((elem, i) =>
//                   <option value={elem} key={i}>{elem}</option>
//                 )
//               }
//             </select>
//             <button type='submit' >Search</button>
//           </form>
//         </div>
//         {this.state.found && this.goToResult()}
//       </div>











