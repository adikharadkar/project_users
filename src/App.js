import './App.css';
import axios from 'axios';
import React, { useEffect } from 'react';

import ViewUsers from './Components/ViewUsers';
// import Main from './Components/Main';

// const router = createBrowserRouter([
//   {
//     path: '/', element: <ViewUsers usersList={usersList} />
//   },
//   {
//     path: '/add-user', element: <UserForm onAddUser={addUserHandler} />
//   }
// ])

function App() {
  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        console.log(JSON.stringify(res.data));
        localStorage.setItem("usersData", JSON.stringify(res.data))
      })
  }, [])
  
  return (
    <div className="App">
      <ViewUsers />
      {/* <Routes>
        <Route exact path='/' element={<ViewUsers usersList={usersList} />} />
        <Route path='/add-user' element={<UserForm onAddUser={addUserHandler} />} />
      </Routes> */}
      {/* <Switch>
      <Route exact path="/">
        <ViewUsers />
      </Route>
      <Route path="/add-user">
        <UserForm />
      </Route>
      </Switch> */}
    </div>
  );
}

export default App;
