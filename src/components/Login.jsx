import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const navigate = useNavigate();

    const login_fn = async () => {
        const res = await axios.post(`http://localhost:8015/login`, {
            "username": ref1.current.value,
            "password": ref2.current.value
        });
        const { data } = res;
        const { login } = data;
        console.log(login);
        login === "success" ? navigate("/dashboard") : navigate("/error");
    };

    return (
        <div className="parent">
            <div className="falling-flowers"></div>
            <header className="app-header">
            <h1>Online Ticket Booking</h1>
            </header>
            <div className="form-container">
            <fieldset>
                <legend>LOGIN FORM</legend>
                <input type="text" ref={ref1} placeholder="enter user name" />
                <input type="password" ref={ref2} placeholder="enter password" />
                <button onClick={login_fn}>Login</button>
            </fieldset>

            </div>
            
        </div>
    );
};

export default Login;
