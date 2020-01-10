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
      searchQuery: ""
    };
    this.inputHandler = this.inputHandler.bind(this);
  }
  async componentWillMount() {
    let categorie = window.query;
    await $.get(`/announces/${categorie}`).then(res => {
      this.setState({ teachers: res });
    });
  }

  inputHandler(event) {
    this.setState({ searchQuery: event.target.value });
  }

  render() {
    const { teachers, searchQuery } = this.state;
    return (
      <div>
        <NavBar />

        <input type="text" onChange={this.inputHandler} value={searchQuery} />

        {teachers.filter(searchFilter(searchQuery)).map(elm => (
          <div key={elm._id}>
            <Teacher data={elm} />
          </div>
        ))}
      </div >
    );
  }
}
export default SearchList;
