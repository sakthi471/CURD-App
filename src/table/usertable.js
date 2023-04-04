const Usertable = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Mail</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.user.length > 0 ? (
          props.user.map((user) => (
            <tr key={user.id}>
              <td> {user.name}</td>

              <td>{user.username}</td>
              <td>
                <button onClick={()=>props.editUser(user)} className="button muted-button white">Edit</button>
                <button
                  className="button muted-button white"
                  onClick={() => props.deleteUser(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No User</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Usertable;
