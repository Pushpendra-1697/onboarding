import React from 'react'
import { useNavigate } from 'react-router-dom';

// default values for isDisabled is false, for name is Marry Doe and for email Marry@Gmail.Com
const Button = ({ label, bgColor, color, isDisabled = false, redirectPath, email = 'Marry@Gmail.Com', name = 'Marry Doe' }) => {
    const nevigate = useNavigate();

    const handleClick = () => {
        nevigate(redirectPath);
        const userDetails = { name, email };
        localStorage.setItem('userDetails', JSON.stringify(userDetails));
        window.location.reload();
    };

    return (
        <button onClick={handleClick} disabled={isDisabled} className='button' style={{ background: bgColor, color }}>
            {label}
        </button>
    );
}

export default Button;