import React, { Component } from 'react';
import Main from './component/Main';
import ErrorBoundary from './component/ErrorBoundary';

export default class  extends Component {
  
  render() {
    return (
      <ErrorBoundary>
        <Main></Main>
      </ErrorBoundary>
      
    )
  }
}