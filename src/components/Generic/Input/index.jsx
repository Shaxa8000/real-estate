import React from 'react';
import {Container} from './style';

const Input = ({children, type}) => {
  return (
    <Container type={type}>
        {children || 'Generic button'}
    </Container>
  )
}

export default Input