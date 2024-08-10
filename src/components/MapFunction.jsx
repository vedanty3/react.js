import React, { useState } from "react";

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

function MapFunction() {
  const [users, setUsers] = useState(usersData);

  return (
    <ol>
      {users.length > 0 &&
        users.map((user, index, users, s) => {
          console.log(user, index, users);
          return <li key={user.id}>{user.name}</li>;
        })}
    </ol>
  );
}

export default MapFunction;
