
import './Footer.css';
import Social from '../parts/Social';

function Footer() {
    const texts = {
        "contact_us": "Contact us",
        "support_email": "support@nextmovies.com",
        "times": "Mon – Fri | 6:00am – 5:00 pm PT",
    };

    return (
        <div className="footer">
            <img src={process.env.PUBLIC_URL + '/favicon.svg'} />
            <h3>{texts.contact_us}</h3>
            <p>{texts.support_email}<br />{texts.times}</p>
            <Social />
        </div>
    );
}

export default Footer;
