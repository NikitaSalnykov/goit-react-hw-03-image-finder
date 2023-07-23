import React from 'react';
import { Btn } from 'components/Button/Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ onClick, children }) => {
  return <Btn onClick={onClick}>{children}</Btn>;
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
};
