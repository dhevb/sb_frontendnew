import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import forgotpassword from "../../assets/forgotpassword.jpg";
import './authpage.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://swadeshi-bazaar-backend.vercel.app/forgotpassword', { email });
            // Handle successful response, e.g., show a success message or navigate to another page
            console.log('Forgot password email request successful:', response.data);
           // Navigate to a verification or success page
        } catch (error) {
            console.error('Forgot password request error:', error);
            // Handle error response, e.g., display error message
        }
    };

    return (
        <div className='authpage'>
            <Navbar reloadnavbar={false} />

            <div className='authcont'>
                <img src={forgotpassword} alt='forgotpassword' />

                <form className='authform' onSubmit={handleSubmit}>
                    <h1>Forgot Password</h1>
                   
                    <div className='formgroup'>
                        <label htmlFor='email'>Email</label>
                        <input 
                            type='email' 
                            id='email' 
                            value={email} 
                            onChange={handleChange} 
                        />
                    </div>
                    
                    <Link to='/login' className='stylenone'>
                        <p>Try Login again?</p>
                    </Link>
                    <button type='submit' className='btn'>Verify</button>
                </form>
            </div>
        </div>
    );
}

export default ForgotPassword;
