import React, { useState } from 'react'
import "./signin.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { setuser } from '../Redux/Actions/SignInActions';
import { useDispatch } from 'react-redux';
// import { useDispatch } from 'react-redux';

function Signin() {
    let [data, setdata] = useState({})
      let dispatch = useDispatch()
    let navigate = useNavigate()
    let setinput = (e) => {
        let { name, value } = e.target
        setdata({ ...data, [name]: value })
    }

    let submit = async (e) => {
        e.preventDefault()
        let signindata = await axios.get("http://localhost:3000/users?email=" + data.email)
        if (signindata.data.length == 1) {
            if (signindata.data[0].password == data.password) {
                toast.success("Login Success")
                dispatch(setuser(signindata.data[0]))
                setTimeout(() => {
                    // window.location = "/"
                    navigate('/')
                }, 1000);
            }
            else {
                toast.error("Wrong Password")
            }
        }
        else {
            toast.error("Invalid Email")
        }

    }


    return (
        <>
            <form action="" method='post' onSubmit={(e) => { submit(e) }}>
                <div>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name='email' required onChange={(e) => { setinput(e) }} />
                </div>
                <div>
                    <label for="email">Password</label>
                    <input type="password" id="Password" name='password' required onChange={(e) => { setinput(e) }} />
                </div>
                <button type="submit">Submit</button>
            </form>
            <ToastContainer />
        </>
    )
}

export default Signin