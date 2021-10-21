import React, { Component } from 'react';

class Theme extends Component {

    state = {
      color: '#122543'
    }
    onChange = () => {
       this.setState({ color: '#ca9a94' });
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