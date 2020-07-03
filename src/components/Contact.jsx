import {Col, Container, Row, Form, Button} from "react-bootstrap";
import React, {useState} from "react";
import styled from "styled-components";
import {SectionTitleh2, Styledh3} from "./common.styled";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
//import axios from 'axios';

const Contact = () => {

/*  const [state, setState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [result, setResult] = useState(null);

  const sendEmail = event => {
    event.preventDefault();
    axios
      .post('/send', { ...state })
      .then(response => {
        setResult(response.data);
        setState({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch(() => {
        setResult({
          success: false,
          message: 'Something went wrong. Try again later'
        });
      });
  };

  const onInputChange = event => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value
    });
  };*/

  return (
    <StyledDiv>
{/*      {result && (
        <p className={`${result.success ? 'success' : 'error'}`}>
          {result.message}
        </p>
      )}*/}
      <Container>
        <Row>
          <Col md={8}>
            <Row>
              <ContactSectionTitle>
                <ContactTitleh2>Get in touch</ContactTitleh2>
                <Contactp>Please fill out the form below to send us an email and we will get back to you as soon as possible.</Contactp>
              </ContactSectionTitle>
              <StyledForm onSubmit={null}>
                <Row>
                  <Col md={6}>
                    <Form.Group controlId="name">
                      <Form.Control
                        onChange={null}
                        value={''}
                        type="text"
                        placeholder="Name"
                        name="name"
                        required="required" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="email">
                      <Form.Control
                        value={''}
                        onChange={null}
                        type="email"
                        placeholder="Email"
                        name="email"
                        required="required" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="message">
                  <Form.Control
                    onChange={null}
                    value={''}
                    required="required"
                    name="message"
                    placeholder="Message"
                    as="textarea"
                    rows="4" />
                </Form.Group>
                <ContactButton variant="custom" type="submit" size="lg">Send Message</ContactButton>
              </StyledForm>
            </Row>
          </Col>
          <Col md={{span: 3, offset: 1}}>
            <Contacth3>Contact Info</Contacth3>
            <ContactItem >
              <ContactItemSpan><ContactItemi><FontAwesomeIcon icon={faPhone} /></ContactItemi> Phone</ContactItemSpan> +1 (305) 928-3828
            </ContactItem>
            <ContactItem>
              <ContactItemSpan><ContactItemi><FontAwesomeIcon icon={faEnvelope} /></ContactItemi> Email</ContactItemSpan> contact@faircon.com
            </ContactItem>
          </Col>
        </Row>
      </Container>
    </StyledDiv>
  )
}


export default Contact;

const ContactItemSpan = styled.p`
  color: rgba(255,255,255,1);
  margin-bottom: 10px;
  display: block;
`;

const ContactItemi = styled.i`
  margin-right: 10px;
`;

const ContactItem = styled.div`
  margin: 20px 0;
`;

const StyledDivision =  styled(Row)`
    border-top: 1px solid rgba(255,255,255,0.15);
    padding-top: 50px;
    margin-top: 50px;
    text-align: center;
`;

const Contactp = styled.p`
  font-size: 16px;
  margin: 0 0 10px;
  color: rgba(255,255,255,.75);
`;

const ContactTitleh2 = styled(SectionTitleh2)`
  color: #fff;
  margin-top: 10px;
  margin-bottom: 15px;
  padding-bottom: 15px;
  
  ::after{
    position: absolute;
    content: "";
    background: rgba(255,255,255,.3);
    height: 4px;
    width: 60px;
    bottom: 0;
    left: 30px;
  }
`;

const StyledDiv = styled.div`
  padding: 100px 0 30px 0;
  background: linear-gradient(to right, #6372ff 0%, #5ca9fb 100%);
  color: rgba(255,255,255,.75);
`;

const ContactSectionTitle = styled.div`
  margin-bottom: 40px;
  @media (max-width: 768px) {
    margin: 0 15px;
  }
`;

const Contacth3 = styled(Styledh3)`
  color: #fff;
  margin-top: 80px;
  margin-bottom: 25px;
  padding-bottom: 20px;
  font-weight: 400;
`;

const ContactButton = styled(Button)`
  font-family: 'Raleway', sans-serif;
  text-transform: uppercase;
  color: #fff !important;
  padding: 14px 34px;
  letter-spacing: 1px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 25px;
  transition: all 0.5s ease !important;
  margin: 30px 0;
  background: transparent;
  border: 2px solid #fff;
  :hover {
    color: #1f386e !important;
    background: #fff;
  }
`;

const StyledForm = styled(Form)`
  padding-top: 20px;
  width: 100%;
  @media (max-width: 768px) {
    margin: 0 15px;
  }
`;