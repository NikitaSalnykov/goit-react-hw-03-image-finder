import React from 'react'
import PropTypes from 'prop-types'
import { Btn } from 'components/Button/Button.styled';

export const Button = ({ onClick, children }) => {

  return (
      <Btn onClick={onClick}>{children}</Btn>
  )
}

