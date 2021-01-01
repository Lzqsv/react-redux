import React, { Component } from 'react'
import Count from './components/Count.js'
import {connect} from 'react-redux'

class App extends Component {
  componentDidMount() {

  }
  render() {
    
    return (
      <div className="App">
        <Count />
      </div>

    );
  }

}
const mapState = state => {
  return {...state}
}
export default connect(mapState)(App) ;
