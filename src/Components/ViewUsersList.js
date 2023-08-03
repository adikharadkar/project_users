import React from "react";

import './ViewUsersList.css';

const ViewUsersList = (props) => {
    return (
        <div>
            <ul>
                
                {props.usersList.map(user => {
                    return (
                        <div key={user.id} className='ListDiv'>
                            <li><b className='title'>Name:</b> {user.name}</li>
                            <li><b className='title'>Username:</b> {user.username}</li>
                            <li><b className='title'>Email:</b> {user.email}</li>
                            <li><b className='title'>Street:</b> {user.address.street}</li>
                            <li><b className='title'>Suite:</b> {user.address.suite}</li>
                            <li><b className='title'>City:</b> {user.address.city}</li>
                            <li><b className='title'>Zipcode:</b> {user.address.zipcode}</li>
                            <li><b className='title'>Latitude:</b> {user.address.geo.lat}</li>
                            <li><b className='title'>Longitude:</b> {user.address.geo.lng}</li>
                            <li><b className='title'>Phone:</b> {user.phone}</li>
                            <li><b className='title'>Website:</b> {user.website}</li>
                            <li><b className='title'>Company:</b> {user.company.name}</li>
                            <li><b className='title'>Catch Phrase:</b> {user.company.catchPhrase}</li>
                            <li><b className='title'>BS:</b> {user.company.bs}</li>
                        </div>
                    )
                })}
                
                
            </ul>
        </div>
    )
}

export default ViewUsersList;