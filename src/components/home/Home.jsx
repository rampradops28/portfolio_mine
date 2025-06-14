import React, { useState, useEffect } from 'react';
import './Home.css';
import Me from '../../assets/avatr.png';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const roles = [
        'Software Developer',
        'Full Stack Developer', 
    ];

    useEffect(() => {
        const handleTyping = () => {
            const current = loopNum % roles.length;
            const fullText = roles[current];

            setText(isDeleting 
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 100 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="" className="home__img" width="120" />
                <h1 className="home__name">RAMPRADOP</h1>
                <span className="home__education">
                    I'm a <span className="typed-text">{text}</span>
                    <span className="cursor">|</span>
                </span>

                <HeaderSocials />

                <a href="#contact" className="btn">Contact Me</a>

                <ScrollDown />
            </div>

            <Shapes />
        </section>
    );
};

export default Home;