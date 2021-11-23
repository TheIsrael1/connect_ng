import React, {useState} from 'react'
import Input from '../../components/Input'
import Form from '../../components/Form'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { getCookie } from './cookieSet'
import styles from './home.module.css'

const Signup = ({
    toggled,
    toggle,
    showDialog,
    showLoader
}) => {
    const [password, setPassword] = useState("")    
    const [first_name, setFname] = useState("")
    const [last_name, setLname] = useState("")
    const [email, setEmail] = useState("")
    const notify = (message) => toast.error(message)

    
        const handleSubmit = e =>{
            e.preventDefault()

        axios
      .post('https://connect-ng.herokuapp.com/api/auth/register', {
        first_name,
        last_name,
        email,
        password
      })
      .then(response => {
        const message = response.data
        localStorage.setItem('token', message.token)
            localStorage.setItem('email', message.email)
            localStorage.setItem('data', message.data)
        console.log("message", message)
        showLoader()
        setTimeout(() => {
            showDialog() 
          }, 5000)

        
      })
      .catch(error => {
        const data = error.response
        console.log("error",data.data.message)
        notify(data.data.message)
      })
        }

        return !toggled?  (
            <>
            <ToastContainer />
            <Form
                        header={"Signup"}
                        submitButtonName={"Sign Up"}
                        disabled={email && password}
                        handleSubmit={handleSubmit}
                        toggle={toggle}
                        >
                        <Input
                            className={`${styles.inputElement}`}
                            id="fname"
                            name="First name"
                            type="name"
                            placeholder="Jhon"
                            value={first_name}
                            setValue={setFname}
                            error={""}
                        />
                        <Input
                            className={`${styles.inputElement}`}
                            id="lname"
                            name="Last name"
                            type="name"
                            placeholder="Doe"
                            value={last_name}
                            setValue={setLname}
                            error={""}
                        />
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
        ) : null

        
    
}

export default Signup
