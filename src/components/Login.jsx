import React, { useState } from 'react'
import '../css/Login.css'
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [user, setUser] = useState(false)
    const dispatch = useDispatch()


    /* const signup = async()=>{
         await firebase.auth().createUserWithEmailAndPassword(email, password)
         
     }
 */
    const login = async () => {
        console.log(email, password)
        localStorage.setItem("email", email)
        localStorage.setItem("pass", password)
        if (email === 'gerente' && password === "pass123") {
            setUser(true)
            dispatch({
                type: 'SET_USER',
                payload: true
            })
        }else{
            alert('user invalido')
        }

        console.log(user)
        // console.log(JSON.parse(localStorage.getItem("user")))

    }


    return (

        <section className="principal">

            {user &&
                <Redirect to={"/items"}></Redirect>
            }



            <div className="form">
                <form action="#">
                    <label htmlFor=""><strong>Email:</strong>  </label>
                    <br />
                    <i className="fas fa-envelope formi"></i>

                    <input type="email" name="email" id="" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <br />
                    <label for="password"><strong>Password:</strong> </label>
                    <br />
                    <i className="fas fa-lock formi"></i>
                    <input type="password" name="password" id="" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <br />
                    <i className="fas fa-sign-in-alt formi i"></i>
                    <input type="button" value="Login" onClick={login} />
                    <i className="fas fa-user-plus formi i"></i>


                </form>
            </div>
        </section>
    )
}

export default Login;