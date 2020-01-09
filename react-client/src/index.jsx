import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import $ from "jquery";
import Search from './Search.js';
// import SelectOption from './SelectOption.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }


  render() {
    return (
      
      <Search />
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
=======
import { BrowserRouter } from 'react-router-dom';
import App from "./app.jsx"

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById("app"));
>>>>>>> 19f067d54969fe3a943fc05c342254271d1f62f9
