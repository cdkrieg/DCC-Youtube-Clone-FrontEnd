import React from "react";
import { Form, Button, FormControl, FormGroup } from "react-bootstrap";
import './SearchBar.css'

const SearchBar = (props) => {
  function onSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <Form
        onSubmit={(event) => {
          onSubmit();
        }}>
        <FormGroup size='lg'>
          <FormControl type='text' placeholder='Search' />
          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default SearchBar;
