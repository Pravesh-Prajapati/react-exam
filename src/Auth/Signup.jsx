import React, { useState } from 'react'
import "./signup.css"
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

function Signup() {
    const [data, setdata] = useState({})
    let navigate= useNavigate()

    let setinput = (e) => {
        let { name, value } = e.target
        setdata({ ...data, [name]: value })
    }

    let submit = async (e) => {
        e.preventDefault()
        let signupdata = await axios.get("http://localhost:3000/users?email=" + data.email)
        console.log(signupdata.data);
        if (signupdata.data.length == 0) {
            if (data.password == data.confirmpassword) {
                let signup = await axios.post("http://localhost:3000/users/", data)
                if (signup) {
                    toast.success("Register Successfully")
                    setTimeout(() => {
                        navigate("/signin")
                    }, 1000);
                }
            }
            else {
                toast.error("Password Doesn't match")
            }
        }
        else {
            toast.error("Email Already Exist")
        }
    }

    return (
        <>
            <div>
                <form onSubmit={(e) => { submit(e) }}>
                    <div>
                        <label for="name">Name:</label>
                        <input type="text" id="name" name='name' required onChange={(e) => { setinput(e) }} />
                    </div>

                    <div>
                        <label for="email">Email:</label>
                        <input type="email" id="email" name='email' required onChange={(e) => { setinput(e) }} />
                    </div>
                    <div>
                        <label for="email">Password</label>
                        <input type="password" id="Password" name='password' required onChange={(e) => { setinput(e) }} />
                    </div>
                    <div>
                        <label for="email">Confirm Password:</label>
                        <input type="password" id="Password" name='confirmpassword' required  onChange={(e) => { setinput(e) }}/>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <ToastContainer />
        </>

    )
}

export default Signup