import { useState } from "react";

const Adduserform = (props) => {
  const innitalState = { id: null, name: "", username: "" };

  const [user, setUser] = useState(innitalState);

  const addUser = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!user.name || !user.username) return;
        props.add(user);
        setUser(innitalState);
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={addUser} />
      <label>Mail</label>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={addUser}
      />
      <button>Add new user</button>
    </form>
  );
};

export default Adduserform;
