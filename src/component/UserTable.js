import React from "react";
import { Table, Button } from "react-bootstrap";

export default function UserTable(props) {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>

        {props.user &&
          props.user.map((data, i) => (
            <tbody key={i}>
              <tr>
                <td>{data.email}</td>
                <td>{data.password}</td>
                <td>
                  <Button variant="primary" onClick={props.handleAdd}>
                    add
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => props.handleUpdate(data.id)}
                  >
                    edit
                  </Button>
                </td>
              </tr>
            </tbody>
          ))}
      </Table>
    </>
  );
}
