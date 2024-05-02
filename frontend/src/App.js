import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [usersData, setUsersData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then(({ data }) => {
        setUsersData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      <h3>Users</h3>
      <div>
        {usersData &&
          usersData.map((user, indx) => {
            return <p key={indx}>{user.name}</p>;
          })}
      </div>
    </div>
  );
}

export default App;
