import React, {useState} from 'react'
import Input from '../../components/Input'
import Form from '../../components/Form'
import styles from './home.module.css'

const Signup = ({
    toggled,
    toggle
}) => {
    const [password, setPassword] = useState("")
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    
        const handleSubmit = (e) =>{
            e.preventDefault()
        }

        return !toggled?  (
        
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
                            value={fname}
                            setValue={setFname}
                            error={""}
                        />
                        <Input
                            className={`${styles.inputElement}`}
                            id="lname"
                            name="Last name"
                            type="name"
                            placeholder="Doe"
                            value={lname}
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
        ) : null

        
    
}

export default Signup
