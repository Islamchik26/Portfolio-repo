import { Link } from 'react-router-dom'
// import LogoTitle from '../../assets/images/logo-s.png'
import './Home.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters';
import Logo from './Logo/Logo';

function Home() {
    const [letterClass, setLetterClass] = useState("text-animate");
    const nameArray = ["I", "s", "l", "a", "m"]
    const jobArray = ["w", "e", "b", " ", "d", "e", "v", "e", "l", "o", "p", "e", "r", "."]

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
    }, [])

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    {/* <img src={LogoTitle} alt="developer" /> */}
                    &nbsp;
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={15}
                    />
                    <br />
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={20}
                    />
                </h1>
                <h2>Full-stack Developer / Data Scientist</h2>
                <Link to={"/contact"} className="flat-button" >CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    )
}

export default Home