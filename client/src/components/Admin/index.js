/**
 * Created by nilkanthagurung on 3/5/18.
 */

import React from 'react';


 const User = (props) => {
     console.log(props);
     let user = props.user.login;
     return (
        <div className="user_container">
            <div className="avatar">
                <img src="/images/avatar.png" alt="avatar"/>
            </div>
            <div className="nfo">
                <div><span>Name:</span> {user.name}</div>
                <div><span>Lastname:</span> {user.lastname}</div>
                <div><span>Email:</span> {user.email}</div>
            </div>
        </div>
  )
};

export default User;