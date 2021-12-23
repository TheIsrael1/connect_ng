import React, {useState} from 'react'
import Input from '../../components/Input'
import Form from '../../components/Form'
import styles from './home.module.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({
    toggled,
    toggle,
    showDialog,
    showLoader,
    hideLoader
}) => {
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const notify = (message) => toast.error(message)

    const handleSubmit = (e) =>{
        e.preventDefault()
        showLoader()
        axios
        .post('https://connect-ng.herokuapp.com/api/auth/login', {
          email,
          password
        })
        .then(response => {
            const message = response.data
            localStorage.setItem('token', message.token)
            localStorage.setItem('email', message.data.email)
            localStorage.setItem('first_name', message.data.first_name)
            localStorage.setItem('id', message.data.id)
            localStorage.setItem('last_name', message.data.last_name)
            console.log("message", message)
            setTimeout(() => {
              showDialog()
            }, 3000)
        
        })
        .catch(error => {
          const data = error.response
          console.log("error",data)
          notify(data.data.message) 
          hideLoader()
 
          
        }) 

        
    }

    
    return toggled ? (
        <>
        <ToastContainer />
        <Form
        header={"Login"}
        submitButtonName={"Login"}
        disabled={email && password}
        handleSubmit={handleSubmit}
        activeLink={toggled}
        toggle={toggle}
        >
        <Input
            className={`${styles.inputElement}`}
            id="email"
            name="Email"
            type="email"
            placeholder="jhondoe@connect.com"
            value={email}
            setValue={setEmail}
            error={""}
        />
        <Input
            className={`${styles.inputElement}`}
            id="password"
            name="Password"
            type="password"
            placeholder="password"
            value={password}
            setValue={setPassword}
            error={""}
        />
        </Form>
        </>
    ): null
}

export default Login
