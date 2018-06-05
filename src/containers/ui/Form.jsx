import React from 'react';
import styled from 'styled-components';

import { isValidEmail, isValidPassword } from './validators';
import { InputWithLabel, Input } from './InputWithLabel'

// change media on mobile to width: 80vw//
const Holder = styled.div`
  width: 40vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to left bottom, #313869, #333160, #342a57, #34244d, #331d44);
`;
const ContentWrapper = styled.div`
  width: 90%;
  height: 90%;
  display:flex;
  flex-direction: column;
`;

const StatusMessageHolder = styled.div`
  background-color: #ee0001;
  box-shadow: 0 0 10px #ee0001;
  color: #fff;
  padding: 15px 20px;
  margin-bottom: 20px;
  border-radius: 10px;
`;
const StatusMessageHolderSend = styled.div`
  background-color: #198C19;
  box-shadow: 0 0 10px #198C19;
  color: #fff;
  padding: 15px 20px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const Cards = styled.div`
  display:flex;
  width: 100%;
  flex-direction: row;
  padding-top: 10%;
  padding-bottom: 10%;
  justify-content: flex-start;
  align-items: flex-end;
`;
const CardElement = styled.div`
  display:flex;
  min-width: 20px;
  margin: 10px;
  padding-bottom: 5px;
  color: #fff;
  border-bottom: 2px solid #1161ee;
  font-size: 1.2rem;
  margin-left: 20px;
`;


const CheckboxLabel = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  padding-left: 10px;
`;
const Label = styled.label`
  color: #fff;
  padding-left: 5px;
`;

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
`;
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
`;

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isSent: false,
      errorMessage: null,
    };
  }

  handleEmailChange = event => {
    const { target: { value }} = event;

    if (value.length === 0 || isValidEmail(value)) {
      this.setState({errorMessage: null});
    }
    this.setState({ email: value });
  }

  handlePasswordChange = event => {
    this.setState({ password: event.target.value});
  }

  handleSubmit = event => {
    const { email, password } = this.state;
    if (!isValidEmail(email)) {
      this.setState({errorMessage:'Email incorrect'});
      return;
    }

    this.setState({isSent: true, email: '', password: '', errorMessage: null});
  }

  render() {
    const { email, password, isSent, errorMessage } = this.state; // https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Operatory/Destructuring_assignment
    
    const isOurSuperEmailOk = isValidEmail(email);
    const isPasswordValid = isValidPassword(password);

    return (
      <Holder>
        <ContentWrapper>
          <Cards>
            <CardElement>SIGN IN</CardElement>
          </Cards>
          {errorMessage && <StatusMessageHolder>{errorMessage}</StatusMessageHolder>}
          {isSent && <StatusMessageHolderSend>Login was successful</StatusMessageHolderSend>}
          <InputWithLabel label="Email" isValid={isOurSuperEmailOk} value={email} onChange={this.handleEmailChange} />
          <InputWithLabel label="Password" isValid={isPasswordValid} isPassword value={password} onChange={this.handlePasswordChange} />
          <CheckboxLabel>
            <Input type="checkbox" name="Keep Me singed in" value="" />
            <Label htmlFor="">Keep Me singed in</Label>
          </CheckboxLabel>
          <Button onClick={this.handleSubmit}>SIGN IN</Button>
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
  }
}
