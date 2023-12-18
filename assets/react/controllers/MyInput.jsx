import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Input(props) {
  return (
    <>
   
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
        {props.Email}
        </InputGroup.Text>
        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />
      </InputGroup>
      <br />
    </>
  );
}
