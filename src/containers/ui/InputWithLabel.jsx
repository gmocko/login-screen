import React from 'react';
import styled from 'styled-components';

const InputHolder = styled.div``;

export const Input = styled.input`
  background-color: rgba(255,255,255, 0.1);
  
  border-radius: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #fff;
  font-size: 1rem;
  padding: 10px 20px;
  border: 1px solid transparent;
  transition: .33s all;
  &:focus {
    outline: none;
  }
`

const Caption = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 10px;
  color: #747687;
  padding-left: 10px;
`

export const InputWithLabel = (props) => {
  const { label, isPassword, value, onChange, isValid = false } = props;
  
  const finalLabel = label.toUpperCase();
  const finalType = isPassword ? 'password' : 'text';

  const inputBorderColor = isValid ? 'green' : 'transparent';

  return (
    <InputHolder>
      <Caption>
        <p>{finalLabel}</p>
      </Caption>
      <Input type={finalType} value={value} onChange={onChange} style={{borderColor: inputBorderColor}} />
    </InputHolder>
  )
}
