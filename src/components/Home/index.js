import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom';
import './index.scss'
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';



const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['l', 'i', 'z', 'e', 't', 'h'];
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r']

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        // Return a cleanup function that clears the timeout
        return () => clearTimeout(timer);
    }, [])

    return (
        <div className="container home-page">
            <div className='text-zone'>
                {/* <h1>Hi, <br /> I'm */}
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>

                    <img src={LogoTitle} alt="developer" />

                    <AnimatedLetters letterClass={letterClass}
                        strArray={nameArray}
                        idx={15}
                    />
                    <br />
                    <AnimatedLetters letterClass={letterClass}
                        strArray={jobArray}
                        idx={22}
                    />
                </h1>
                <h2>Full stack Engineer / Java / Podcaster</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo/>
        </div>
    )
};

export default Home;