import React from "react"
import auth from './LoginBox.js'
import firebase from "firebase/app";
import "firebase/auth";
import { Button } from 'antd';


const SignOutButton = (props) => {

    const onSignOut = (props) => {
        firebase.auth().signOut();
        window.location.href = "http://localhost:3000"

    }

    return (
        <div className='SignOutButton'> 
            <Button onClick = {onSignOut}> Sign Out </Button>
        </div>
    )

}
export default SignOutButton;