import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkGetAllCookies } from '../../redux/cookies';
import './CookiesHome.css';
import { NavLink, useNavigate } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';

function CookiesHome() {
    const dispatch = useDispatch();
    const cookies = useSelector(state => Object.values(state.cookies.allCookies)) || [];
    const navigate = useNavigate();
    const user = useSelector(state => state.session.user); // Get the user from the Redux store

    useEffect(() => {
        dispatch(thunkGetAllCookies());
    }, [dispatch]);

    const handleCreateCookie = () => {
        navigate('/cookies/new');
    };




    return (
        <div>
            {/* Conditionally render the "Create New Cookie" button if the user is an admin */}
            {user && user.role === 'admin' && (
                <div className="create-cookie-button-container">
                    <button onClick={handleCreateCookie} className="create-cookie-button">
                        Button here
                    </button>
                </div>
            )}


            {/* <div className="contact-style">
                <div className="facebook">
                    <a
                        href="https://www.facebook.com/Aunt-Angies-Cookies-and-Co-100094284582480"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FacebookIcon style={{ fontSize: 48, color: 'black' }} />
                    </a>
                </div>

                <div className="contact-container">
                    <p className="contact-info">Contact us for cookies not listed:</p>
                    <p className="phone-number">(907) 388-0410</p>
                    <p className="email">orchard.angel3@gmail.com</p>
                </div>

                <div className="time">
                    <p className="hours-off-opp">Hours of Operation:</p>
                    <p className="hours-off-opp-time">M-F: 9 AM - 5 PM</p>
                </div>
            </div> */}
        </div>
    );
}

export default CookiesHome;
