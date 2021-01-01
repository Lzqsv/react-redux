import React, { Component } from 'react'
import {connect} from 'react-redux';
import mapDispatch from './dispatch.js'
 class setName extends Component {
    Count(type){
        this.props.addCount(type)
     }
    render() {
       const {count} = this.props;
        return (
            <div >
                <button onClick={()=>this.Count('ADD')}>+</button>
                {count}
                <button onClick={()=>this.Count('SUB')}>-</button>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        ...state
    }
}
export default connect(mapStateToProps,mapDispatch)(setName) 