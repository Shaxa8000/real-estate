import React from 'react';
import {Container} from './style';

const Button = ({children, type}) => {
  return (
    <Container type={type}>
        {children || 'Generic button'}
    </Container>
  )
}

export default Button