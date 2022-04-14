import React from "react";
import { Form, Button, FormControl, InputGroup } from "react-bootstrap";
import './SearchBar.css'

const SearchBar = (props) => {
  function onSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <Form size="lg"
        onSubmit={(event) => {
          onSubmit();
          
        }}>
        <InputGroup className="mb-3">
          <FormControl type='text' placeholder='Search' />
          <Button variant='primary' type='submit' >
            Submit
          </Button>
        </InputGroup>
      </Form>
    </div>
  );
};

export default SearchBar;
