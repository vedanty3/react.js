import React from "react";
import { Table } from "react-bootstrap";

const usersData = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    age: 28,
    isActive: true,
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob.smith@example.com",
    age: 35,
    isActive: false,
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    age: 22,
    isActive: true,
  },
  {
    id: 4,
    name: "Diana Prince",
    email: "diana.prince@example.com",
    age: 31,
    isActive: true,
  },
  {
    id: 5,
    name: "Edward Elric",
    email: "edward.elric@example.com",
    age: 24,
    isActive: false,
  },
];

/*
function BootstrapTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {usersData.map(({ id, name, email, age }) => {
          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{age}</td>
              <td>{email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
*/

// variant="dark" size="sm" bordered hover striped

function BootstrapTable() {
  return (
    <Table striped="columns" responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {usersData.map(({ id, name, email, age, isActive }) => {
          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{age}</td>
              <td>{email}</td>
              <td>{isActive ? "Online" : "Offline"}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default BootstrapTable;
