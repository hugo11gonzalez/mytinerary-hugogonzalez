import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import {Link as Anchor} from 'react-router-dom'
const index = () => {
  return (
    <>
      <Nav
        className="d-flex bg-danger justify-content-center"
        defaultActiveKey="/home"
        as="ul"
      >
        <Nav.Item as="ol">
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item as="ol">
          <Nav.Link eventKey="link-1">Cities</Nav.Link>
        </Nav.Item>
        <Nav.Item as="ol">
          <Nav.Link eventKey="link-2">
            <Button variant="outline-primary">Login</Button>{" "}
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default index

