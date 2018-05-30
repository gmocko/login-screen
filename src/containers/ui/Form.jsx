import React from 'react';
import styled from 'styled-components';



// change media on mobile to width: 80vw//
const Holder = styled.div`
  width: 40vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to left bottom, #313869, #333160, #342a57, #34244d, #331d44);
`
const ContentWrapper = styled.div`
  width: 90%;
  height: 90%;
  display:flex;
  flex-direction: column;
`
const Cards = styled.div`
  display:flex;
  width: 100%;
  flex-direction: row;
  padding-top: 10%;
  padding-bottom: 10%;
  justify-content: flex-start;
  align-items: flex-end;
`
const CardElement = styled.div`
  display:flex;
  min-width: 20px;
  margin: 10px;
  padding-bottom: 5px;
  color: #fff;
  border-bottom: 2px solid #1161ee;
  font-size: 1.2rem;
  margin-left: 20px;
  
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

const Input = styled.input`
  background-color: rgba(255,255,255, 0.1);
  height: 5vh;
  border-radius: 50px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #fff;
  font-size: 1rem;
  padding-left: 20px;
  border: none;
  &:focus {
    outline: none;
  }
`
const CheckboxLabel = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  padding-left: 10px;
`
const Label = styled.label`
  color: #fff;
  padding-left: 5px;
  
`

const Button = styled.div`
  background-color: #1161ee;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  padding: 15px;
  box-shadow: 0 0 10px #1161ee;
  transition: .33s all;
  &:hover {
    padding-left: 20px;
    padding-right: 20px;
  }
`
const Forgot = styled.div`
  display:flex;
  height: 20%;
  flex-direction: column;
  flex-grow: 1;
  div:first-of-type {
    flex-grow: 1;
    border-bottom: 2px solid #747687;;
  }
  div:nth-of-type(2) {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      color: #747687;
    }
  }
`
 


export const Form = () => (
  <Holder>
    <ContentWrapper>
      <Cards>
        <CardElement>SIGN IN</CardElement>
        <CardElement>SIGN UP</CardElement>
      </Cards>
      <Caption>
        <p>USERNAME</p>
      </Caption>
      <Input type = "text"/>
      <Caption>
        <p>PASSWORD</p>
      </Caption>
      <Input type = "password" name="password"/>
      <CheckboxLabel>
        <Input type ="checkbox" name = "Keep Me singed in" value = ""/>
        <Label htmlFor="">Keep Me singed in</Label>
      </CheckboxLabel>
      <Button>SIGN IN</Button>
      <Forgot>
        <div>
        </div>
        <div>
          <p>Forgot Password?</p>
        </div>    
      </Forgot>
    </ContentWrapper>
  </Holder>
)
