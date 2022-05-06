import React from "react";

import { Modal, Button, Form } from "react-bootstrap";

export default function Model(props) {
  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.edit ? "Edit User" : "Add User"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={props.edit ? props.onEditData : props.handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email </Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                name="email"
                value={props.alldata.email}
                onChange={props.handleChange}
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              ss
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder=" password"
                name="password"
                value={props.alldata.password}
                onChange={props.handleChange}
              />
            </Form.Group>
            <Button type="submit"> submit</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
