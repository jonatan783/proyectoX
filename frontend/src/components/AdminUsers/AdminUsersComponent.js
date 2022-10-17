import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { getAllUserRequest, promoteUserRequest, removeUserRequest } from '../../requests/userRequest'
import useInput from '../../hooks/useInput';
import './AdminUsers.css';

//FALTA: - Considerar que un admin no puede autorrevocarse un permiso.

const AdminUsersComponent = () => {
  const navigate = useNavigate();

  const searchValue = useInput('');

  const user = useSelector(state => state.user);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUserRequest(user.roleId)
      .then(res => setUsers(res.data))
  }, []);

  const handlePromote = id => {
    promoteUserRequest(id)
      .then(() => {
        getAllUserRequest(user.roleId)
          .then(res => setUsers(res.data));
      })
  };

  const handleRemove = id => {
    removeUserRequest(id)
      .then(() => {
        getAllUserRequest(user.roleId)
          .then(res => setUsers(res.data));
      });
  };

  return (
    <div className='container usersTitleDiv'>
      <h1 style={{ paddingBottom: '40px' }}>Users</h1>

      <Table bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Acción</th>
          </tr>
        </thead>
        <tbody>
          {users.map((usr, index) => {
            return (
              <tr key={index}>
                <td>{usr.name}</td>
                <td>{usr.lastname}</td>
                <td>{usr.email}</td>
                <td>
                  {usr.roleId === 2 || usr.roleId === 3 ? (
                    <button
                      onClick={() => handleRemove(usr.id)}
                      className='btn btn-danger'
                      disabled={
                        user.id ? parseInt(user.id) === parseInt(usr.id) : true
                      }
                    >
                      Remover
                    </button>
                  ) : (
                    <button
                      className='btn btn-success'
                      disabled={
                        user.id ? parseInt(user.id) === parseInt(usr.id) : true
                      }
                      onClick={() => handlePromote(usr.id)}
                    >
                      Promover
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default AdminUsersComponent;
