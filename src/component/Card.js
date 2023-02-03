import React, { Component } from 'react'

export default class Card extends Component {
   
    
  render() {
    return (
      <div className='card'>
        <h1>{this.props.login}</h1>
        <img src={this.props.avatar_url} alt={this.props.login}></img>
        <a href={this.props.html_url}>Github Profile</a>
      </div>
    )
  }
}
