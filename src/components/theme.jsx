import React, { Component } from 'react';

class Theme extends Component {

    state = {
      color: 'red'
    }
    onChange = () => {
       this.setState({ color: 'green' });
    }
    render () {
      return (
        <div 
         style={{ backgroundColor: this.state.color } }
        
         >
        
       <button  onClick={this.onChange}>Change Color</button>
        </div>
      );
    }
  }
   
  export default Theme;