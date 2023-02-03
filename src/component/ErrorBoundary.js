import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(){
        super();
        this.state={isError:false};
    }
    static getDerivedStateFromError(error){
            return{isError:true};
    }

  render() {
    if(this.state.isError){
        return<div className='error'>you have error</div>
    }
    else{
        return<div>{this.props.children}</div>
    }
  }
}
