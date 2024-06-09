import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Navbar from "../../components/Navbar/Navbar";
import loginimg from "../../assets/loginimg.jpg";
import "../../App.css";
import "./authpage.css";

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://swadeshi-bazaar-backend.vercel.app//auth/login', formData);
            // Handle successful response, e.g., redirect to homepage or dashboard
            console.log('Login successful:', response.data);
            navigate('/'); // Navigate to the home page
        } catch (error) {
            console.error('Login error:', error);
            // Handle error response, e.g., display error message
        }
    };

    return (
        <div className="authpage">
            <Navbar />

            <div className="authcont">
                <img src={loginimg} alt="login" />

                <form className="authform" onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="formgroup">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                        />
                    </div>

                    <div className="formgroup">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            value={formData.password} 
                            onChange={handleChange} 
                        />
                    </div>

                    <Link to="/forgotpassword" className="stylenone">
                        <p>Forgot Password?</p>
                    </Link>
                    <button type="submit" className="btn">Login</button>
                    <h2 className="or">OR</h2>
                    <Link to="/signup" className="stylenone">
                        <button className="btn">Signup</button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Login;
