import React, {useState} from 'react'
import Input from '../../components/Input'
import Form from '../../components/Form'
import styles from './home.module.css'

const Login = ({
    toggled,
    toggle
}) => {
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
    }

    return toggled ? (
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
    ): null
}

export default Login
