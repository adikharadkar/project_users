import React from 'react';

import './ViewUsersTable.css';

const ViewUsersTable = (props) => {
    return (
        <div className='TableDiv'>
            <table cellSpacing='0'>
                <thead>
                    <tr className="tr">
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Street</th>
                        <th>Suite</th>
                        <th>City</th>
                        <th>Zipcode</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Company</th>
                        <th>Catch Phrase</th>
                        <th>BS</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {props.usersList.map(user => {
                        return (<tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.address.street}</td>
                            <td>{user.address.suite}</td>
                            <td>{user.address.city}</td>
                            <td>{user.address.zipcode}</td>
                            <td>{user.address.geo.lat}</td>
                            <td>{user.address.geo.lng}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                            <td>{user.company.name}</td>
                            <td>{user.company.catchPhrase}</td>
                            <td>{user.company.bs}</td>
                        </tr>)
                    })}
                    
                </tbody>
            </table>
        </div>
    )
}

export default ViewUsersTable;