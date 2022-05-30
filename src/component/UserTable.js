import React from "react";
import { Table, Button } from "react-bootstrap";

export default function UserTable({
  handleUpdate,
  user,
  handleAdd,
  handleDelete,
}) {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>

        {user &&
          user.map((data, i) => (
            <tbody key={i}>
              <tr>
                <td>{data.email}</td>
                <td>{data.password}</td>
                <td>
                  <Button variant="primary" onClick={handleAdd}>
                    add
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => handleUpdate(data.id)}
                  >
                    edit
                  </Button>
                  {/* <Button variant="secondary" onClick={handleDelete(data.id)}>
                    Delete
                  </Button> */}
                </td>
              </tr>
            </tbody>
          ))}
      </Table>
    </>
  );
}
