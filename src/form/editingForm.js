import { useEffect, useState } from "react";

const Eform = (props) => {
  const [user, setUser] = useState(props.currentuser);

 useEffect(()=>{
   setUser(props.currentuser)
 },[props])
   
  const addUser = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!user.name || !user.username) return;
        props.updateUser(user.id, user);
       
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
      <button>updateUser</button>

      <button
        className="button muted-button"
        onClick={() => props.setEditing(false)}
      >
        Cancel
      </button>
    </form>
  );
};

export default Eform ;
