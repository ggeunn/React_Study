import React, { useReducer, useEffect } from 'react';

const initialState = {
  users: [],
  loading: false,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload),
      };
    default:
      throw new Error();
  }
}

const fetchUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!response.ok) {
    throw new Error('Failed to fetch');
  }
  return await response.json();
};

function UserManagement() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });

      try {
        const result = await fetchUsers();
        dispatch({ type: 'FETCH_SUCCESS', payload: result });
      } catch (error) {
        dispatch({ type: 'FETCH_FAILURE', payload: error.message });
      }
    };

    fetchData();
  }, []);

  const handleAddUser = () => {
    const newUser = {
      id: state.users.length + 1,
      name: `New User ${state.users.length + 1}`,
      email: `newuser${state.users.length + 1}@example.com`,
    };

    dispatch({ type: 'ADD_USER', payload: newUser });
  };

  const handleRemoveUser = (id) => {
    dispatch({ type: 'REMOVE_USER', payload: id });
  };

  if (state.loading) {
    return <div>Loading...</div>;
  }

  if (state.error) {
    return <div>Error: {state.error}</div>;
  }

  return (
    <div>
      <h1>User Management</h1>
      <button onClick={handleAddUser}>Add User</button>
      <ul>
        {state.users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => handleRemoveUser(user.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserManagement;