import express from "express";
import cors from "cors";

const app = express();

const PORT = 5000;

app.use(cors());

const usersData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    age: 30,
    address: "123 Main St, City, Country",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    age: 25,
    address: "456 Elm St, Town, Country",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice@example.com",
    age: 35,
    address: "789 Oak St, Village, Country",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  res.send(usersData);
});

app.listen(PORT, (req, res) => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
