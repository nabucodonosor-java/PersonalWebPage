import ScrollService from '../../../utils/ScrollService';
import Typical from 'react-typical';
import './Profile.css';

const Profile = () => {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='https://www.facebook.com/Franco.Canizo.Sobrinho'>
                                <i className='fa fa-facebook-square'></i>
                            </a>
                            <a href='#google'>
                                <i className='fa fa-google-plus-square'></i>
                            </a>
                            <a href='https://www.instagram.com/francocanizobrasil/'>
                                <i className='fa fa-instagram'></i>
                            </a>
                            <a href='https://www.youtube.com/channel/UCB-Lo1JW26MVfohw7h8NKNQ'>
                                <i className='fa fa-youtube-square'></i>
                            </a>
                            <a href='#twitter'>
                                <i className='fa fa-twitter'></i>
                            </a>
                        </div>
                    </div>
               
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello! I'm <span className='highlighted-text'>Franco</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical 
                                loop={Infinity}
                                steps={[
                                    "Ethusiastic Dev 🥳",
                                    1000,
                                    "Full Stack Developer 💻",
                                    1000,
                                    "Java Developer 😎",
                                    1000,
                                    "JS and TS Padwan 😃",
                                    1000,
                                    "ReactJS Padwan 😃",
                                    1000,
                                ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Knack of building applications with front and back end operations.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                    <button className="btn primary-btn"
                    onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                    > 
                        Contact Me 
                    </button>
                        <a href='cv.pdf' download='cv.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
