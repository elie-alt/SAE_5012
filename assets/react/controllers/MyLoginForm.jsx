import React from "react";

import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../styles/LoginFormStyles.css';


function LoginForm(props) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{props.LoginFormEmailAddress}</Form.Label>
        <Form.Control type="email" placeholder={props.LoginFormPlaceholderEmailAddress} />
        <Form.Text className="text-muted">
          {props.LoginFormTextEmailAdress}
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>{props.LoginFormLabelPassword}</Form.Label>
        <Form.Control type="password" placeholder={props.LoginFormPlaceholderPassword} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
      {props.LoginFormSubmit}
      </Button>
    </Form>
  );
}

export default LoginForm;