import React, { useState, useEffect } from 'react';

import Button from './Button';
import ViewUsersTable from './ViewUsersTable';
import ViewUsersList from './ViewUsersList';
import UserForm from './UserForm';



const ViewUsers = (props) => {
    const [usersList, setUsersList] = useState([]);
    const [listViewClicked, setListViewClicked] = useState(false);
    const [userBtnClicked, setUserBtnClicked] = useState(false);

    useEffect(() => {
        const usersData = localStorage.getItem("usersData");
        if (usersData !== null) {
            setUsersList(JSON.parse(usersData))
        }
    }, [])

    const addUserHandler = (userObj) => {
        setUsersList(prevList => {
          return [...prevList, userObj]
        })
      }

    const handleListView = () => {
        setListViewClicked(!listViewClicked)
    }

    const addUserBtnHandler = () => {
        setUserBtnClicked(true);
    }

    return (
        <div>
            {
                userBtnClicked === false ? 
                <div>
                    <Button onClick={addUserBtnHandler}>Add User</Button>
                    <Button onClick={handleListView}>{listViewClicked === false ? 'List View' : 'Table View'}</Button>
                    {listViewClicked === false ? <ViewUsersTable usersList={usersList} /> : <ViewUsersList usersList={usersList} />}
                </div> : <UserForm onAddUser={addUserHandler} usersList={usersList}/>
                
            }
            
        </div>
    )
}

export default ViewUsers;