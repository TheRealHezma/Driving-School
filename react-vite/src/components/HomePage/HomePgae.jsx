import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './HomePage.css';
import chocChipImage from '../../../../prepWork/choc_chip_cookies.jpg';
import gojo_chibi from '../../../../prepWork/Gojo_sugar_cookie.jpg';
import pokemonSugarCook from '../../../../prepWork/Pokemon_sugar_cook.jpg';
// import pumpkinFallSugarCook from '../../../../prepWork/Pumpkin_fall_Suger_cook.jpg';
import summer_cookies from '../../../../prepWork/summer_cookies.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';

export default function HomePage() {
    const navigate = useNavigate();
    const sessionUser = useSelector(state => state.session.user);

    const handleClick = () => {
        if (sessionUser) {
            navigate('/cookies');
        }
    };

    const sections = [
        {
            image: chocChipImage,
            text: "Text here",
        },
        {
            image: gojo_chibi,
            text: "Text here",
        },
        {
            image: pokemonSugarCook,
            text: "Text here",
        },
        // {
        //     image: pumpkinFallSugarCook,
        //     text: "Celebrate the fall season with our special Pumpkin Fall Sugar Cookies, perfect for any autumn gathering.",
        // },
        {
            image: summer_cookies,
            text: "Text here",
        }
    ];





    return (
        <div className="homepage-container">
            {sections.map((section, index) => (
                <div
                    className={`homepage-content ${index % 2 === 0 ? '' : 'reverse-layout'}`}
                    key={index}
                >
                    <div className="homepage-image">
                        <img src={section.image} alt="Delicious Cookies" />
                    </div>
                    <div className="homepage-text">
                        <p>{section.text}</p>
                    </div>
                </div>
            ))}
            <footer className="footer">
                {/* <p>Web Developer: Hemza Mansour</p>
                <div className="footer-links">
                    <a
                        href="https://github.com/TheRealHezma"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github
                    </a>
                    <a
                        href="https://www.linkedin.com/in/hemza-mansour-038a2521a/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                </div> */}
                <div className="contact-style">
                    {/* Facebook Icon */}
                    <div className="facebook">
                        <a
                            href="https://www.facebook.com/Aunt-Angies-Cookies-and-Co-100094284582480"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FacebookIcon style={{ fontSize: 48, color: 'black' }} />
                        </a>
                    </div>

                    {/* Contact Info Section */}
                    <div className="contact-container">
                        <p className="contact-info">Contact Us:</p>
                        <p className="phone-number">(907) 388-0410</p>
                        <p className="email">orchard.angel3@gmail.com</p>
                    </div>

                    {/* Hours of Operation Section */}
                    <div className="time">
                        <p className="hours-off-opp">Hours of Operation:</p>
                        <p className="hours-off-opp-time">M-F: 9 AM - 5 PM</p>
                    </div>
                </div>
            </footer>

        </div>
    );
}
