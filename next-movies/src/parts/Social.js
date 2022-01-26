
import './../App.css';
import './Social.css';
import Facebook from './../assets/facebook-share-icon.svg';
import Instagram from './../assets/instagram-share-icon.svg';
import Linkedin from './../assets/linkedin-share-icon.svg';
import Twitter from './../assets/twitter-share-icon.svg';
import Youtube from './../assets/youtube-share-icon.svg';

function Social() {
    const socialLinks = [Facebook, Linkedin, Twitter, Instagram, Youtube, ];

    return (
        <section className='social'>
            {socialLinks.map((link, i) => <img className='socialLink' src={link} key={i} />)}
        </section>
    );
}

export default Social;
