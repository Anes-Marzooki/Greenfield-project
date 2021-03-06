import React from "react";
import { Redirect } from 'react-router-dom';

class Teacher extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  changeState(e) {
    this.setState({ clicked: true })
  }
  RenderTheComponant() {
    return <Redirect to={`/${this.props.data._id}`} />
  }
  render() {
     const elem = Math.floor(this.props.data.rating);
    const stars = [];
    let count = 0;
      for (let i =0; i < 5; i++) { 
        if (count !== elem) {
          stars.push(<span key={i} className="fa fa-star checked" style={{color: 'gold'}}></span>); 
          count++;
        }else {
          stars.push(<span className="fa fa-star" style={{color: 'lightGray'}}></span>)
        } 
      }
    return (
    <div id={this.props.data._id} onClick={this.changeState.bind(this)}>
        <h3>{this.props.data.firstName} {this.props.data.lastName}</h3>
        <h3>{this.props.data.region}</h3>
          {stars}
        {this.state.clicked && this.RenderTheComponant()}
    </div>
    );
  }
}
export default Teacher;

