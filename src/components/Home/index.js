import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom';
import './index.scss'
import { useState } from 'react';



const Home = () => {

    const [letterClass, setletterClass] = useState('text-animate');
    const nameArray = ['l', 'i', 'z', 'e', 't', 'h'];
    const jobArray = ['s', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'e', 'n', 'g', 'i', 'n', 'e', 'e', 'r']



    return (
        <div className="container home-page">
            <div className='text-zone'>
                <h1>Hi, <br /> I'm
                    <img src={LogoTitle} alt="developer" />
                    Lizeth vera
                    <br />
                    Software Engineer
                </h1>
                <h2>Full stack Engineer / Java / Podcaster</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
};

export default Home;