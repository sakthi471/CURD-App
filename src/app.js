import React, { useState } from "react";
import Adduserform from "./form/form";
import Usertable from "./table/usertable";

import Eform from "./form/editingForm";
function App() {
  const User = [
    { id: 1, name: "sakthi", username: "sakthi@gmil" },
    { id: 2, name: "ragul", username: "ragul@gmail" },
    { id: 3, name: "kalai", username: "kalai@gmail" },
  ];

  const [users, setUsers] = useState(User);

  const [edting, setEditing] = useState(false);
  const innitalState = { id: null, name: "", username: "" };
  const [currentuser, setCurrent] = useState(innitalState);

  const editrow = (user) => {
    setEditing(true);
    setCurrent({ id: user.id, name: user.name, username: user.username });
  };

  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updateUser : user)));
  };

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(
      users.filter((user) => {
        return user.id !== id;
      })
    );
    setEditing(false);
  };

  return (
    <div className="container">
      <h1 className="white">CURD APP </h1>
      <div className="flex-row">
        <div className="flex-large">
          {edting ? (
            <div>
              <h2>Edit user</h2>
              <Eform
                currentuser={currentuser}
                updateUser={updateUser}
                edting={edting}
              />
            </div>
          ) : (
            <div>
              <h2 className="white">ADD user</h2>
              <Adduserform add={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2 className="white">View User</h2>
          <Usertable editUser={editrow} deleteUser={deleteUser} user={users} />
        </div>
      </div>
    </div>
  );
}

export default App;
