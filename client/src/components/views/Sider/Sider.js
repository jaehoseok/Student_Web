import React, {useState} from 'react'
import './Sections/Sider.css';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';

function Sider(props) {
    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        let body = {
            email: Email,
            password: Password
        }

        dispatch(loginUser(body))
            .then(response => {
                if (response.payload.loginSuccess) {
                    props.history.push('/')
                } else {
                    alert('Error˝')
                }
            })


    }
    return (
        <div className="sider">
            <form className="login" style={{ display: 'flex', flexDirection: 'column' }} onSubmit={onSubmitHandler}>
                <label>ID</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                <label>Password</label>
                <input type="password" value={Password} onChange={onPasswordHandler} />
                <br />
                <button type="submit">
                    로그인
                </button>
                <br/>
                <button>
                    회원가입
                </button>
            </form>
            <div className="mid"/>
            <div className="notice">알람</div>
        </div>
    )
}

export default Sider
