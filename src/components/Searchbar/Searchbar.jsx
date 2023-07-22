import React, { Component } from 'react'
import { HeaderSearchbar, Form } from './Searchbar.styled'


export class Searchbar extends Component {
  
  state = {
    value: ''
  }

  handleChange = ({ target }) => {
    this.setState({
      value: target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
     this.setState({value: ''})
  }

  render() {
    return (
    <HeaderSearchbar>
    
    <Form onSubmit={this.onSubmit}>
    <button type="submit">
      <span>Search</span>
    </button>

    <input onChange={this.handleChange}
      type="text"
      autoComplete="off"
      autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
    />
    </Form>
    </HeaderSearchbar>
    )
  }
}

export default Searchbar