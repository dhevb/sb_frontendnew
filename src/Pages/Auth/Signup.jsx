import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import signup from "../../assets/signuppage.jpg";
import './authpage.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://swadeshi-bazaar-backend.vercel.app//auth/signup', formData);
            // Handle successful response, e.g., show a success message or redirect
            console.log('Signup successful:', response.data);
            
            navigate('/login'); 
            // Optionally, you can reset the form after a successful submission
            setFormData({
                first_name: '',
                last_name: '',
                email: '',
                password: ''
            });
        } catch (error) {
            console.error('Signup error:', error);
            // Handle error response, e.g., display error message
        }
    };

    return (
        <div className='authpage'>
            <Navbar reloadnavbar={false} />

            <div className='authcont'>
                <img src={signup} alt='signup' />

                <form className='authform' onSubmit={handleSubmit}>
                    <h1>Signup</h1>
                    <div className='form-group-row'>
                        <div className='formgroup'>
                            <label htmlFor='first_name'>First Name</label>
                            <input type='text' id='first_name' value={formData.first_name} onChange={handleChange} />
                        </div>
                        <div className='formgroup'>
                            <label htmlFor='last_name'>Last Name</label>
                            <input type='text' id='last_name' value={formData.last_name} onChange={handleChange} />
                        </div>
                    </div>
                    <div className='formgroup'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' value={formData.email} onChange={handleChange} />
                    </div>

                    <div className='form-group-row'>
                        <div className='formgroup'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' id='password' value={formData.password} onChange={handleChange} />
                        </div>
                    </div>

                    <Link to='/login' className='stylenone'>
                        <p>Already have an account?</p>
                    </Link>
                    <button type='submit' className='btn'>Signup</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
