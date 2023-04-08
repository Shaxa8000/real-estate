import React from 'react';
import {Container} from './style';

const Input = ({
   onChange,
   type,
   placeholder,
   name,
   value,
   defaultValue,
   width,
   height
  }) => {
  return (
    <Container
    onChange={onChange}
    type={type}
    value={value}
    defaultValue={defaultValue}
    placeholder={placeholder}
    name={name}
    width={width}
    height={height}
   />
  )
}

export default Input