import React from "react";
import { Form, Button } from "react-bootstrap";

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
        <Form.Control className="control" type='text' placeholder='Search' />
        <Button className="button" variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SearchBar;
