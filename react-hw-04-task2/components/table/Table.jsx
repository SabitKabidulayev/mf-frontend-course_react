import './table.css';

const Table = ({ usersData, sortBy, setSelectedUser }) => {
  const getUserDataByClick = userData => {
    setSelectedUser(userData);
  };

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => sortBy('id')} role="button">ID</th>
          <th onClick={() => sortBy('name')} role="button">Name</th>
          <th onClick={() => sortBy('username')} role="button">UserName</th>
          <th onClick={() => sortBy('email')} role="button">Email</th>
          <th onClick={() => sortBy('street')} role="button">Address</th>
        </tr>
      </thead>
      <tbody>
        {usersData.map(user => (
          <tr key={user.id} onClick={() => getUserDataByClick(user)} role="button">
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{`${user.street}, ${user.city}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;