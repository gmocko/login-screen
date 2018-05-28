import React from 'react';
import styled from 'styled-components';

const Holder = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Button = styled.div`
  background-color: #1161ee;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  padding: 15px;
  box-shadow: 0 0 10px #1161ee;
`

export const Form = () => (
  <Holder>
    Form
    <Button>SIGN IN</Button>
  </Holder>
)
