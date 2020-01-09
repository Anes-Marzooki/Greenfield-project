import React from "react";
import $ from "jquery";

class Announce extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      info: {},
    }
  }

  componentWillMount() {
    console.log("test")
    $.get(`/announce/${localStorage.getItem('redirection')}`)
      .then(res => this.setState({ info: res }))
  }

  render() {
    return (
      <div onClick={this.sendID}>
        <h3>{this.state.info.firstName} {this.state.info.lastName}</h3>
        <h3>{this.state.info.region}</h3>
        <h3>{this.state.info.price} DT</h3>
        <a href="/">Home</a>
      </div>
    )
  }
}
export default Announce;