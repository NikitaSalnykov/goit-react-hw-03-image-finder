import React, { Component } from 'react'
import { HeaderSearchbar, Form } from './Searchbar.styled'
import PropTypes from 'prop-types'
import Notiflix from 'notiflix'

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
    if (this.state.value === '') return Notiflix.Notify.failure('Empty input!')
    this.props.onSubmit(this.state.value.trim());
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

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired
}