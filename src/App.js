import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';


class App extends React.Component {
state={
  person:{fullName:"***",
          bio:"***",
          imgSrc:'***',
          profession:'***'},
  shows:true,
  date: new Date()
   }
   toggle=()=>
    {this.setState({shows:!this.state.shows})
    }

    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
     


      
    }

    
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
  render(){

return( <div>
{
this.state.shows  &&  <div><h1>{this.state.person.fullName}</h1>
<h2>{this.state.person.bio}</h2>
<h3>{this.state.person.imgSrc}</h3>
<h4>{this.state.person.profession}</h4>
<h2>It is {this.state.date.getSeconds-}</h2>
</div>}
<button onClick={(e)=>this.toggle() }>SHOW STATE</button>
</div>);
  }
};
export default App;

 